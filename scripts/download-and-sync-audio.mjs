import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const audioDir = path.resolve(rootDir, 'public/audio');

if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

function parseSongsFromCode(code) {
  const startMarker = 'AURORA_SONGS: Song[] = ';
  const jsonStart = code.indexOf(startMarker) + startMarker.length;
  const jsonEnd = code.indexOf('];', jsonStart) + 1;
  return JSON.parse(code.substring(jsonStart, jsonEnd));
}

const curFilePath = path.resolve(rootDir, 'src/data/auroraSongs.ts');
const curCode = fs.readFileSync(curFilePath, 'utf8');
const curSongs = parseSongsFromCode(curCode);
const curSongMap = new Map(curSongs.map(s => [s.id, s]));

let oldSongs = [];
try {
  const oldCode = execSync('git show 7265fc4:src/data/auroraSongs.ts', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  oldSongs = parseSongsFromCode(oldCode);
} catch (err) {
  console.warn('Could not fetch old commit:', err.message);
}

async function searchDeezer(query) {
  try {
    const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    return null;
  }
}

async function downloadFile(url, destPath) {
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 10000) {
    return true;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Failed download ${url} (HTTP ${res.status})`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 5000) {
      console.warn(`File too small: ${buffer.length} bytes`);
      return false;
    }
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    console.warn(`Download error for ${url}:`, err.message);
    return false;
  }
}

async function main() {
  console.log('=== Step 1: Recovering Missing Songs ===');
  const restoredSongs = [];

  const missingOld = oldSongs.filter(s => !curSongMap.has(s.id));
  console.log(`Found ${missingOld.length} potential songs to recover.`);

  for (const s of missingOld) {
    let clean = s.title.replace(/\s*\(feat\..*?\)/i, '').replace(/\s*\[.*?\]/i, '').replace(/\s*\(.*?\)/i, '').trim();
    let query = 'AURORA ' + clean;
    let expectedArtistKeyword = 'aurora';

    if (s.id.includes('bmth')) {
      query = 'Bring Me The Horizon limousine';
      expectedArtistKeyword = 'bring me the horizon';
    } else if (s.id.includes('sub-urban')) {
      query = 'Sub Urban PARAMOUR';
      expectedArtistKeyword = 'sub urban';
    } else if (s.id.includes('tom-odell')) {
      query = 'Tom Odell Butterflies';
      expectedArtistKeyword = 'tom odell';
    } else if (s.id.includes('wardruna')) {
      query = 'Wardruna Helvegen';
      expectedArtistKeyword = 'wardruna';
    } else if (s.id.includes('chem-bros')) {
      query = 'The Chemical Brothers ' + clean;
      expectedArtistKeyword = 'chemical';
    } else if (s.id.includes('frozen')) {
      query = 'Into the Unknown AURORA';
      expectedArtistKeyword = 'aurora';
    } else if (s.id.includes('askjell')) {
      query = 'Askjell ' + clean;
      expectedArtistKeyword = 'askjell';
    } else if (s.id.includes('alone-in-the-night')) {
      query = 'Sondre Lerche Alone in the night';
      expectedArtistKeyword = 'sondre';
    } else if (s.id.includes('storm')) {
      query = 'Qing Feng Wu Storm AURORA';
      expectedArtistKeyword = 'qing';
    }

    const results = await searchDeezer(query);
    if (!results || results.length === 0) {
      console.log(`Skipping (not found): ${s.title}`);
      continue;
    }

    const match = results.find(r => {
      const art = r.artist?.name?.toLowerCase() || '';
      const tit = r.title?.toLowerCase() || '';
      const matchesArtist = art.includes(expectedArtistKeyword) || (tit.includes('aurora'));
      return matchesArtist && r.preview;
    });

    if (match && match.preview) {
      console.log(`[RESTORED] ${s.title} (${match.title} by ${match.artist.name})`);
      s.previewUrl = match.preview;
      if (match.album?.cover_xl || match.album?.cover_big) {
        s.artwork = match.album.cover_xl || match.album.cover_big;
      }
      restoredSongs.push(s);
    } else {
      console.log(`[SKIPPED] ${s.title} (No strict artist match)`);
    }
  }

  console.log(`Successfully recovered ${restoredSongs.length} songs!`);

  const allSongs = [...curSongs, ...restoredSongs];
  console.log(`Total catalog size: ${allSongs.length} songs.`);

  console.log('\n=== Step 2: Downloading 100% of Audio Snippets to public/audio/ ===');
  let downloadedCount = 0;
  let failedSongs = [];

  for (let i = 0; i < allSongs.length; i++) {
    const s = allSongs[i];
    const ext = s.previewUrl.includes('.m4a') ? '.m4a' : '.mp3';
    const filename = `${s.id}${ext}`;
    const destPath = path.resolve(audioDir, filename);

    process.stdout.write(`[${i + 1}/${allSongs.length}] ${s.title}... `);
    const success = await downloadFile(s.previewUrl, destPath);
    if (success) {
      s.previewUrl = `./audio/${filename}`;
      downloadedCount++;
      console.log('OK');
    } else {
      console.log('FAILED');
      failedSongs.push(s);
    }
  }

  console.log(`\nDownloaded: ${downloadedCount}/${allSongs.length}. Failed: ${failedSongs.length}`);

  const playableCatalog = allSongs.filter(s => !failedSongs.includes(s));
  console.log(`Final playable catalog size: ${playableCatalog.length}`);

  console.log('\n=== Step 3: Updating src/data/auroraSongs.ts ===');
  const startMarker = 'AURORA_SONGS: Song[] = ';
  const jsonStart = curCode.indexOf(startMarker) + startMarker.length;
  const jsonEnd = curCode.indexOf('];', jsonStart) + 1;

  const newCode = curCode.substring(0, jsonStart) +
    JSON.stringify(playableCatalog, null, 2) +
    curCode.substring(jsonEnd - 1);

  fs.writeFileSync(curFilePath, newCode, 'utf8');
  console.log('src/data/auroraSongs.ts updated successfully!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
