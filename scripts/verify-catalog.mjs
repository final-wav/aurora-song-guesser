import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const audioDir = path.resolve(rootDir, 'public/audio');

const songsFile = path.resolve(rootDir, 'src/data/auroraSongs.ts');
const code = fs.readFileSync(songsFile, 'utf8');

const startMarker = 'AURORA_SONGS: Song[] = ';
const jsonStart = code.indexOf(startMarker) + startMarker.length;
const jsonEnd = code.indexOf('];', jsonStart) + 1;
const songs = JSON.parse(code.substring(jsonStart, jsonEnd));

console.log(`[Catalog Verification] Checking ${songs.length} songs...`);

const ids = new Set();
let errors = 0;

for (const s of songs) {
  if (!s.id || !s.title || !s.artist) {
    console.error(`Missing metadata for song: ${JSON.stringify(s)}`);
    errors++;
  }
  if (ids.has(s.id)) {
    console.error(`Duplicate song ID: ${s.id}`);
    errors++;
  }
  ids.add(s.id);

  if (!s.previewUrl) {
    console.error(`Missing previewUrl for: ${s.id}`);
    errors++;
    continue;
  }

  const cleanPath = s.previewUrl.replace(/^\.\//, '');
  const filePath = path.resolve(rootDir, 'public', cleanPath);

  if (!fs.existsSync(filePath)) {
    console.error(`Missing audio file for song [${s.title}]: ${filePath}`);
    errors++;
  } else {
    const stat = fs.statSync(filePath);
    if (stat.size < 5000) {
      console.error(`Audio file too small (${stat.size} bytes) for: ${filePath}`);
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`\nFAILED: Found ${errors} error(s) in catalog!`);
  process.exit(1);
} else {
  console.log(`\nSUCCESS: 100% of ${songs.length} songs are verified and have working local audio files!`);
}
