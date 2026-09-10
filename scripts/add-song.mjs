import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const audioDir = path.resolve(rootDir, 'public/audio');

const query = process.argv.slice(2).join(' ').trim();
if (!query) {
  console.log('Usage: node scripts/add-song.mjs "<Song Title or Search Term>"');
  process.exit(1);
}

async function addSong() {
  console.log(`Searching Deezer for: "${query}"...`);
  const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) {
    console.error(`Search request failed (${res.status})`);
    return;
  }
  const data = await res.json();
  const results = (data.data || []).filter(d => d.preview);

  if (results.length === 0) {
    console.error('No tracks with preview audio found.');
    return;
  }

  const match = results[0];
  console.log(`Found match: "${match.title}" by ${match.artist.name} (${match.album?.title || 'Single'})`);

  const slug = match.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  const songId = `aurora-${slug}`;
  const filename = `${songId}.mp3`;
  const destPath = path.resolve(audioDir, filename);

  console.log(`Downloading 30s preview snippet to public/audio/${filename}...`);
  const audioRes = await fetch(match.preview);
  if (!audioRes.ok) {
    console.error('Failed to download audio preview stream.');
    return;
  }
  const buffer = Buffer.from(await audioRes.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
  console.log(`Saved audio (${(buffer.length / 1024).toFixed(1)} KB).`);

  // Read catalog
  const catalogPath = path.resolve(rootDir, 'src/data/auroraSongs.ts');
  const code = fs.readFileSync(catalogPath, 'utf8');
  const startMarker = 'AURORA_SONGS: Song[] = ';
  const jsonStart = code.indexOf(startMarker) + startMarker.length;
  const jsonEnd = code.indexOf('];', jsonStart) + 1;
  const songs = JSON.parse(code.substring(jsonStart, jsonEnd));

  if (songs.some(s => s.id === songId)) {
    console.log(`Song with id "${songId}" already exists in catalog. Updated audio file.`);
    return;
  }

  const newSong = {
    id: songId,
    title: match.title,
    artist: match.artist.name,
    album: match.album?.title || 'Single',
    year: new Date().getFullYear(),
    artwork: match.album?.cover_xl || match.album?.cover_big || match.artist?.picture_xl || '',
    previewUrl: `./audio/${filename}`,
    difficulty: 'medium',
    tags: [match.album?.title, 'AURORA'].filter(Boolean)
  };

  songs.push(newSong);
  const newCode = code.substring(0, jsonStart) + JSON.stringify(songs, null, 2) + code.substring(jsonEnd - 1);
  fs.writeFileSync(catalogPath, newCode, 'utf8');

  console.log(`Successfully added "${match.title}" to catalog! Total songs: ${songs.length}`);
}

addSong().catch(err => {
  console.error('Error adding song:', err);
});
