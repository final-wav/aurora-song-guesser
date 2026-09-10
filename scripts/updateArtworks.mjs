import fs from 'fs';

async function updateArtworks() {
  const songsFile = fs.readFileSync('./src/data/auroraSongs.ts', 'utf8');
  const startMarker = 'export const AURORA_SONGS: Song[] = ';
  const arrayStart = songsFile.indexOf(startMarker) + startMarker.length;
  const arrayEnd = songsFile.indexOf('\n];\n', arrayStart) + 2;
  const arrayStr = songsFile.substring(arrayStart, arrayEnd);

  const songs = (new Function(`return ${arrayStr}`))();
  console.log('Enriching artwork for', songs.length, 'tracks...');

  for (let i = 0; i < songs.length; i++) {
    const s = songs[i];
    try {
      const q = encodeURIComponent(
        (s.artist.toLowerCase().includes('aurora') ? '' : 'AURORA ') +
        s.artist + ' ' + s.title.replace(/\(.*?\)/g, '').trim()
      );
      const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=song&limit=3`);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const match = data.results.find(t => t.artworkUrl100) || data.results[0];
        if (match && match.artworkUrl100) {
          s.artwork = match.artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg');
        }
      }
    } catch (e) {
      console.warn('Could not fetch artwork for', s.title);
    }
  }

  // Ensure default fallback is available
  const defaultArtwork = 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-4fa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg';

  const output = `export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  artwork: string;
  previewUrl: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert' | 'brutal';
  isFeature?: boolean;
  isSoundtrack?: boolean;
  isCover?: boolean;
  tags?: string[];
  appleMusicUrl?: string;
  spotifySearchUrl?: string;
}

export const DEFAULT_AURORA_ARTWORK = '${defaultArtwork}';

export const AURORA_SONGS: Song[] = ${JSON.stringify(songs, null, 2)};

const dynamicPreviewCache = new Map<string, { previewUrl: string; artwork: string }>();

/**
 * Searches and fetches real live preview URLs & artwork from iTunes API as fallback or enrichment
 */
export async function fetchLiveTrackDetails(song: Song): Promise<{ previewUrl: string; artwork: string }> {
  if (dynamicPreviewCache.has(song.id)) {
    return dynamicPreviewCache.get(song.id)!;
  }

  try {
    const cleanTitle = song.title.replace(/\\s*\\(feat\\..*?\\)/i, '').replace(/\\s*\\[.*?\\\]/i, '').trim();
    const query = encodeURIComponent(\`AURORA \${cleanTitle}\`);
    const res = await fetch(\`https://itunes.apple.com/search?term=\${query}&entity=song&limit=5\`);
    if (res.ok) {
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const track = data.results.find((t: { previewUrl?: string }) => Boolean(t.previewUrl)) || data.results[0];
        if (track) {
          const result = {
            previewUrl: track.previewUrl || song.previewUrl,
            artwork: track.artworkUrl100 ? track.artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg') : song.artwork,
          };
          dynamicPreviewCache.set(song.id, result);
          return result;
        }
      }
    }
  } catch (err) {
    console.warn(\`Could not fetch dynamic details for \${song.title}:\`, err);
  }

  return {
    previewUrl: song.previewUrl,
    artwork: song.artwork,
  };
}

export async function fetchLiveTrackPreview(song: Song): Promise<string> {
  const details = await fetchLiveTrackDetails(song);
  return details.previewUrl;
}
`;

  fs.writeFileSync('./src/data/auroraSongs.ts', output, 'utf8');
  console.log('Successfully written updated auroraSongs.ts with fresh live artworks!');
}

updateArtworks();
