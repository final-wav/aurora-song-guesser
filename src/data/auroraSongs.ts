export interface Song {
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

export const DEFAULT_AURORA_ARTWORK = 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-4fa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/600x600bb.jpg';

export const AURORA_SONGS: Song[] = [
  {
    "id": "runaway",
    "title": "Runaway",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b7/5f/76/b75f7659-c7ac-36d8-e01f-2f6d02f5ef34/5056167160632.jpg/600x600bb.jpg",
    "previewUrl": "./audio/runaway.m4a",
    "difficulty": "easy"
  },
  {
    "id": "conqueror",
    "title": "Conqueror",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/conqueror.m4a",
    "difficulty": "easy"
  },
  {
    "id": "running-with-the-wolves",
    "title": "Running with the Wolves",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ad/6b/5d/ad6b5d0e-99ef-5657-643c-2367be8cedbd/0044003184138_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/running-with-the-wolves.m4a",
    "difficulty": "easy"
  },
  {
    "id": "warrior",
    "title": "Warrior",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/warrior.m4a",
    "difficulty": "easy"
  },
  {
    "id": "i-went-too-far",
    "title": "I Went Too Far",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/i-went-too-far.m4a",
    "difficulty": "medium"
  },
  {
    "id": "winter-bird",
    "title": "Winter Bird",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/winter-bird.m4a",
    "difficulty": "medium"
  },
  {
    "id": "murder-song",
    "title": "Murder Song (5, 4, 3, 2, 1)",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/murder-song.m4a",
    "difficulty": "medium"
  },
  {
    "id": "lucky",
    "title": "Lucky",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/lucky.m4a",
    "difficulty": "medium"
  },
  {
    "id": "through-the-eyes-of-a-child",
    "title": "Through the Eyes of a Child",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/through-the-eyes-of-a-child.m4a",
    "difficulty": "hard"
  },
  {
    "id": "home",
    "title": "Home",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/home.mp3",
    "difficulty": "medium"
  },
  {
    "id": "under-the-water",
    "title": "Under the Water",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/under-the-water.m4a",
    "difficulty": "hard"
  },
  {
    "id": "black-water-lilies",
    "title": "Black Water Lilies",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/black-water-lilies.m4a",
    "difficulty": "hard"
  },
  {
    "id": "half-the-world-away",
    "title": "Half the World Away",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend (Deluxe)",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/half-the-world-away.m4a",
    "difficulty": "easy",
    "isCover": true
  },
  {
    "id": "nature-boy",
    "title": "Nature Boy (Acoustic)",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend (Deluxe)",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/nature-boy.m4a",
    "difficulty": "hard",
    "isCover": true
  },
  {
    "id": "wisdom-cries",
    "title": "Wisdom Cries",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend (Deluxe)",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/wisdom-cries.m4a",
    "difficulty": "hard"
  },
  {
    "id": "murder-song-acoustic",
    "title": "Murder Song (5, 4, 3, 2, 1) [Acoustic]",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend (Deluxe)",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/murder-song-acoustic.m4a",
    "difficulty": "hard"
  },
  {
    "id": "puppet",
    "title": "Puppet",
    "artist": "AURORA",
    "album": "Early Singles (Loosie)",
    "year": 2012,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/2a/93/ca/2a93ca36-6657-47e8-b451-baa534172acd/cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/puppet.m4a",
    "difficulty": "brutal"
  },
  {
    "id": "awakening",
    "title": "Awakening",
    "artist": "AURORA",
    "album": "Early Singles (Loosie)",
    "year": 2014,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/09/93/7d/09937dda-3f54-a958-73e8-3dd87b2ad7be/7071245127022_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/awakening.m4a",
    "difficulty": "brutal"
  },
  {
    "id": "under-stars",
    "title": "Under Stars",
    "artist": "AURORA",
    "album": "Under Stars - Single (Loosie)",
    "year": 2014,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6b/ea/67/6bea67b9-df3e-d8ab-d901-d417c4dde83c/0044003179172_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/under-stars.m4a",
    "difficulty": "hard"
  },
  {
    "id": "in-boxes",
    "title": "In Boxes",
    "artist": "AURORA",
    "album": "Running with the Wolves EP",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1f/fa/b4/1ffab409-ae13-6309-f836-4031ceee2444/0044003180994_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/in-boxes.m4a",
    "difficulty": "hard"
  },
  {
    "id": "little-boy-in-the-grass",
    "title": "Little Boy in the Grass",
    "artist": "AURORA",
    "album": "Running with the Wolves EP",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1f/fa/b4/1ffab409-ae13-6309-f836-4031ceee2444/0044003180994_Cover.jpg/600x600bb.jpg",
    "previewUrl": "./audio/little-boy-in-the-grass.m4a",
    "difficulty": "hard"
  },
  {
    "id": "queendom",
    "title": "Queendom",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "./audio/queendom.m4a",
    "difficulty": "easy"
  },
  {
    "id": "forgotten-love",
    "title": "Forgotten Love",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "./audio/forgotten-love.m4a",
    "difficulty": "medium"
  },
  {
    "id": "gentle-earthquakes",
    "title": "Gentle Earthquakes",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "./audio/gentle-earthquakes.m4a",
    "difficulty": "hard"
  },
  {
    "id": "all-is-soft-inside",
    "title": "All Is Soft Inside",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "./audio/all-is-soft-inside.m4a",
    "difficulty": "medium"
  },
  {
    "id": "it-happened-quiet",
    "title": "It Happened Quiet",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "./audio/it-happened-quiet.m4a",
    "difficulty": "medium"
  },
  {
    "id": "churchyard",
    "title": "Churchyard",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "./audio/churchyard.m4a",
    "difficulty": "hard"
  },
  {
    "id": "soft-universe",
    "title": "Soft Universe",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "./audio/soft-universe.m4a",
    "difficulty": "medium"
  },
  {
    "id": "infections-of-a-different-kind",
    "title": "Infections of a Different Kind",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "./audio/infections-of-a-different-kind.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-river",
    "title": "The River",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/the-river.m4a",
    "difficulty": "easy"
  },
  {
    "id": "animal",
    "title": "Animal",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/animal.m4a",
    "difficulty": "easy"
  },
  {
    "id": "dance-on-the-moon",
    "title": "Dance on the Moon",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/dance-on-the-moon.m4a",
    "difficulty": "medium"
  },
  {
    "id": "daydreamer",
    "title": "Daydreamer",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/daydreamer.m4a",
    "difficulty": "medium"
  },
  {
    "id": "hunger",
    "title": "Hunger",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/hunger.m4a",
    "difficulty": "hard"
  },
  {
    "id": "soulless-creatures",
    "title": "Soulless Creatures",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/soulless-creatures.m4a",
    "difficulty": "hard"
  },
  {
    "id": "in-bottles",
    "title": "In Bottles",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/in-bottles.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-different-kind-of-human",
    "title": "A Different Kind of Human",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/d1/30/9b/d1309b29-c024-6512-b585-f1b6483bf2c3/5056167160960.jpg/600x600bb.jpg",
    "previewUrl": "./audio/a-different-kind-of-human.m4a",
    "difficulty": "hard"
  },
  {
    "id": "apple-tree",
    "title": "Apple Tree",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/apple-tree.m4a",
    "difficulty": "easy"
  },
  {
    "id": "the-seed",
    "title": "The Seed",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/the-seed.m4a",
    "difficulty": "easy"
  },
  {
    "id": "mothership",
    "title": "Mothership",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "./audio/mothership.m4a",
    "difficulty": "hard"
  },
  {
    "id": "stjernestov",
    "title": "Stjernestøv",
    "artist": "AURORA",
    "album": "Stjernestøv - Single (Loosie)",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/13/e4/83/13e483ec-b32a-26d0-48d4-96555df582d0/195497746484.jpg/600x600bb.jpg",
    "previewUrl": "./audio/stjernestov.m4a",
    "difficulty": "medium",
    "isSoundtrack": true
  },
  {
    "id": "the-secret-garden",
    "title": "The Secret Garden",
    "artist": "AURORA",
    "album": "The Secret Garden OST (Loosie)",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0b/80/df/0b80dfbc-ec8e-f505-3f3d-8b0916c4a842/20UMGIM72652.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/the-secret-garden.m4a",
    "difficulty": "hard",
    "isSoundtrack": true
  },
  {
    "id": "a-potion-for-love",
    "title": "A Potion for Love",
    "artist": "AURORA",
    "album": "A Potion For Love - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/4a/ad/2a/4aad2a46-b652-c1f9-5c0e-7a6398ef1661/196925304795.jpg/600x600bb.jpg",
    "previewUrl": "./audio/a-potion-for-love.m4a",
    "difficulty": "medium"
  },
  {
    "id": "the-devil-is-human",
    "title": "The Devil is Human",
    "artist": "AURORA",
    "album": "The Devil is Human - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8b/0c/ca/8b0cca90-058a-b765-7aac-e230b22bd2db/196925103916.jpg/600x600bb.jpg",
    "previewUrl": "./audio/the-devil-is-human.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-woman-i-am",
    "title": "The Woman I Am",
    "artist": "AURORA",
    "album": "The Woman I Am - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/47/0b/bc/470bbcf5-b4bb-0224-8b63-73d6d5c1b143/5056167173236.jpg/600x600bb.jpg",
    "previewUrl": "./audio/the-woman-i-am.m4a",
    "difficulty": "hard"
  },
  {
    "id": "hunting-shadows",
    "title": "Hunting Shadows (Assassin's Creed Theme)",
    "artist": "AURORA",
    "album": "Assassin's Creed 15th Anniversary (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5b/a2/07/5ba2070a-e132-c9ab-879f-91d3c619c88f/196925611237.jpg/600x600bb.jpg",
    "previewUrl": "./audio/hunting-shadows.m4a",
    "difficulty": "hard",
    "isSoundtrack": true
  },
  {
    "id": "pink-moon",
    "title": "Pink Moon",
    "artist": "AURORA",
    "album": "Pink Moon - Single (Loosie)",
    "year": 2023,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/17/99/87/179987cf-14ce-eb41-be48-5fe53581660c/0810098500135.png/600x600bb.jpg",
    "previewUrl": "./audio/pink-moon.m4a",
    "difficulty": "hard",
    "isCover": true
  },
  {
    "id": "cure-for-me-acoustic",
    "title": "Cure for Me (Acoustic)",
    "artist": "AURORA",
    "album": "Cure for Me (Acoustic) - Single (Loosie)",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/cure-for-me-acoustic.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-temporary-high-acoustic",
    "title": "A Temporary High (Acoustic)",
    "artist": "AURORA",
    "album": "A Temporary High (Acoustic) - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/52/eb/31/52eb31e4-3f97-54ea-d13c-070ec539d65d/5056167171744.jpg/600x600bb.jpg",
    "previewUrl": "./audio/a-temporary-high-acoustic.m4a",
    "difficulty": "hard"
  },
  {
    "id": "cure-for-me",
    "title": "Cure for Me",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/cure-for-me.m4a",
    "difficulty": "easy"
  },
  {
    "id": "exist-for-love",
    "title": "Exist for Love",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/exist-for-love.m4a",
    "difficulty": "easy"
  },
  {
    "id": "giving-in-to-the-love",
    "title": "Giving In to the Love",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/giving-in-to-the-love.m4a",
    "difficulty": "easy"
  },
  {
    "id": "heathens",
    "title": "Heathens",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/heathens.m4a",
    "difficulty": "medium"
  },
  {
    "id": "everything-matters",
    "title": "Everything Matters (feat. Pomme)",
    "artist": "AURORA & Pomme",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/everything-matters.m4a",
    "difficulty": "medium",
    "isFeature": true
  },
  {
    "id": "a-temporary-high",
    "title": "A Temporary High",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/52/eb/31/52eb31e4-3f97-54ea-d13c-070ec539d65d/5056167171744.jpg/600x600bb.jpg",
    "previewUrl": "./audio/a-temporary-high.m4a",
    "difficulty": "medium"
  },
  {
    "id": "the-innocent",
    "title": "The Innocent",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/the-innocent.m4a",
    "difficulty": "medium"
  },
  {
    "id": "blood-in-the-wine",
    "title": "Blood in the Wine",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/blood-in-the-wine.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-dangerous-thing",
    "title": "A Dangerous Thing",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/a-dangerous-thing.m4a",
    "difficulty": "medium"
  },
  {
    "id": "artemis",
    "title": "Artemis",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/artemis.m4a",
    "difficulty": "hard"
  },
  {
    "id": "you-keep-me-crawling",
    "title": "You Keep Me Crawling",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/you-keep-me-crawling.m4a",
    "difficulty": "medium"
  },
  {
    "id": "exhale-inhale",
    "title": "Exhale Inhale",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/exhale-inhale.m4a",
    "difficulty": "hard"
  },
  {
    "id": "this-could-be-a-dream",
    "title": "This Could Be a Dream",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/this-could-be-a-dream.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-little-place-called-the-moon",
    "title": "A Little Place Called the Moon",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/a-little-place-called-the-moon.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-forbidden-fruits-of-eden",
    "title": "The Forbidden Fruits of Eden",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "./audio/the-forbidden-fruits-of-eden.m4a",
    "difficulty": "hard"
  },
  {
    "id": "your-blood",
    "title": "Your Blood",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2023,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d8/6c/c9/d86cc9af-f415-8879-796d-b222a911f058/197190224337.jpg/600x600bb.jpg",
    "previewUrl": "./audio/your-blood.m4a",
    "difficulty": "easy"
  },
  {
    "id": "some-type-of-skin",
    "title": "Some Type of Skin",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b1/9f/df/b19fdfbf-f497-17d6-9328-b1f38343f707/198391418907.jpg/600x600bb.jpg",
    "previewUrl": "./audio/some-type-of-skin.m4a",
    "difficulty": "easy"
  },
  {
    "id": "the-conflict-of-the-mind",
    "title": "The Conflict of the Mind",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/69/d5/53/69d553cf-c070-3dd0-6c46-9fd660b897c4/197190569520.jpg/600x600bb.jpg",
    "previewUrl": "./audio/the-conflict-of-the-mind.m4a",
    "difficulty": "medium"
  },
  {
    "id": "to-be-alright",
    "title": "To Be Alright",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/74/55/ff/7455ff66-95f2-01fe-104a-0a7dc6375268/198588087459.jpg/600x600bb.jpg",
    "previewUrl": "./audio/to-be-alright.m4a",
    "difficulty": "medium"
  },
  {
    "id": "the-blade",
    "title": "The Blade",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/66/97/85/66978511-3fbd-7c77-756d-187b9705c6a6/198391581359.jpg/600x600bb.jpg",
    "previewUrl": "./audio/the-blade.m4a",
    "difficulty": "medium"
  },
  {
    "id": "tomora-please",
    "title": "Please",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-please.m4a",
    "difficulty": "medium",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-come-closer",
    "title": "Come Closer",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-come-closer.m4a",
    "difficulty": "easy",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-a-boy-like-you",
    "title": "A Boy Like You",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-a-boy-like-you.m4a",
    "difficulty": "medium",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-ring-the-alarm",
    "title": "Ring the Alarm",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2025,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-ring-the-alarm.m4a",
    "difficulty": "easy",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-my-baby",
    "title": "My Baby",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-my-baby.m4a",
    "difficulty": "medium",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-have-you-seen-me-dance-alone",
    "title": "Have You Seen Me Dance Alone",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-have-you-seen-me-dance-alone.m4a",
    "difficulty": "medium",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-somewhere-else",
    "title": "Somewhere Else",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-somewhere-else.m4a",
    "difficulty": "easy",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-i-drink-the-light",
    "title": "I Drink the Light",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-i-drink-the-light.m4a",
    "difficulty": "medium",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-wavelengths",
    "title": "Wavelengths",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-wavelengths.m4a",
    "difficulty": "medium",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-side-by-side",
    "title": "Side by Side",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-side-by-side.m4a",
    "difficulty": "medium",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-the-thing",
    "title": "The Thing",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-the-thing.m4a",
    "difficulty": "easy",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "tomora-in-a-minute",
    "title": "In a Minute",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "./audio/tomora-in-a-minute.m4a",
    "difficulty": "medium",
    "isFeature": true,
    "tags": [
      "TOMORA",
      "Electronic",
      "Come Closer",
      "Tom Rowlands"
    ]
  },
  {
    "id": "starvation",
    "title": "Starvation",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/starvation.mp3",
    "difficulty": "medium"
  },
  {
    "id": "my-name",
    "title": "My Name",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/my-name.mp3",
    "difficulty": "hard"
  },
  {
    "id": "do-you-feel",
    "title": "Do You Feel?",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/do-you-feel.mp3",
    "difficulty": "hard"
  },
  {
    "id": "dreams",
    "title": "Dreams",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/dreams.mp3",
    "difficulty": "hard"
  },
  {
    "id": "my-body-is-not-mine",
    "title": "My Body Is Not Mine",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/my-body-is-not-mine.mp3",
    "difficulty": "medium"
  },
  {
    "id": "the-essence",
    "title": "The Essence",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/the-essence.mp3",
    "difficulty": "hard"
  },
  {
    "id": "when-the-dark-dresses-lightly",
    "title": "When the Dark Dresses Lightly",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/when-the-dark-dresses-lightly.mp3",
    "difficulty": "medium"
  },
  {
    "id": "a-soul-with-no-king",
    "title": "A Soul with No King",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/a-soul-with-no-king.mp3",
    "difficulty": "hard"
  },
  {
    "id": "invisible-wounds",
    "title": "Invisible Wounds",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/invisible-wounds.mp3",
    "difficulty": "hard"
  },
  {
    "id": "echo-of-my-shadow",
    "title": "Echo of My Shadow",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/echo-of-my-shadow.mp3",
    "difficulty": "hard"
  },
  {
    "id": "earthly-delights",
    "title": "Earthly Delights",
    "artist": "AURORA",
    "album": "What Happened To The Heart? (Deluxe)",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/d6d2e6ec51be692d4a56309def7fb950/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/earthly-delights.mp3",
    "difficulty": "hard"
  },
  {
    "id": "the-flood",
    "title": "The Flood",
    "artist": "AURORA",
    "album": "What Happened To The Heart? (Deluxe)",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/185bd36a0dc427a9ae637248ea1f232a/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/the-flood.mp3",
    "difficulty": "hard"
  },
  {
    "id": "the-weight-of-missing",
    "title": "The Weight Of Missing",
    "artist": "AURORA",
    "album": "What Happened To The Heart? (Deluxe)",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/185bd36a0dc427a9ae637248ea1f232a/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/the-weight-of-missing.mp3",
    "difficulty": "hard",
    "tags": [
      "What Happened To The Heart?",
      "2024",
      "Deluxe"
    ]
  },
  {
    "id": "hearts-intuition",
    "title": "Hearts Intuition",
    "artist": "AURORA",
    "album": "What Happened To The Heart? (Deluxe)",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/185bd36a0dc427a9ae637248ea1f232a/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/hearts-intuition.mp3",
    "difficulty": "hard",
    "tags": [
      "What Happened To The Heart?",
      "2024",
      "Deluxe"
    ]
  },
  {
    "id": "into-the-unknown",
    "title": "Into the Unknown",
    "artist": "Idina Menzel & AURORA",
    "album": "Frozen II (Original Motion Picture Soundtrack)",
    "year": 2019,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/13a1396512c6468e7b9d209621b8afcf/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/into-the-unknown.mp3",
    "difficulty": "easy",
    "isSoundtrack": true
  },
  {
    "id": "paramour-sub-urban",
    "title": "PARAMOUR (feat. AURORA)",
    "artist": "Sub Urban & AURORA",
    "album": "Hive",
    "year": 2021,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/38e60ecb6097e3aa7d307114dea93c7c/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/paramour-sub-urban.mp3",
    "difficulty": "medium",
    "isFeature": true
  },
  {
    "id": "limousine-bmth",
    "title": "liMOusIne (feat. AURORA)",
    "artist": "Bring Me The Horizon & AURORA",
    "album": "POST HUMAN: NeX GEn",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/2eeb0c78e835db405d700a46aad90f4c/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/limousine-bmth.mp3",
    "difficulty": "medium",
    "isFeature": true
  },
  {
    "id": "eve-of-destruction-chem-bros",
    "title": "Eve of Destruction",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/9c206c703a0bc8858526ea8f401d62c7/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/eve-of-destruction-chem-bros.mp3",
    "difficulty": "hard",
    "isFeature": true
  },
  {
    "id": "bango-chem-bros",
    "title": "Bango",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/9c206c703a0bc8858526ea8f401d62c7/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/bango-chem-bros.mp3",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "no-geography-chem-bros",
    "title": "No Geography",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/9c206c703a0bc8858526ea8f401d62c7/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/no-geography-chem-bros.mp3",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "the-universe-sent-me-chem-bros",
    "title": "The Universe Sent Me",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/9c206c703a0bc8858526ea8f401d62c7/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/the-universe-sent-me-chem-bros.mp3",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "catch-me-im-falling-chem-bros",
    "title": "Catch Me I'm Falling",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/9c206c703a0bc8858526ea8f401d62c7/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/catch-me-im-falling-chem-bros.mp3",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "butterflies-tom-odell",
    "title": "Butterflies (feat. AURORA)",
    "artist": "Tom Odell & AURORA",
    "album": "Best Day of My Life",
    "year": 2023,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/dd1673c0e941ae1a82a66cab44c92888/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/butterflies-tom-odell.mp3",
    "difficulty": "hard",
    "isFeature": true
  },
  {
    "id": "to-be-loved-askjell",
    "title": "To Be Loved (feat. AURORA)",
    "artist": "Askjell & AURORA",
    "album": "everything gong to be ok",
    "year": 2019,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/818e1e1793eaa76a12ea34977389815c/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/to-be-loved-askjell.mp3",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "sofia-askjell",
    "title": "Sofia (feat. AURORA & iris)",
    "artist": "Askjell, iris & AURORA",
    "album": "everything will be ok",
    "year": 2020,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/476415af68182f78e3e30c8e85e9e072/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/sofia-askjell.mp3",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "alone-in-the-night",
    "title": "Alone in the Night (feat. AURORA)",
    "artist": "Sondre Lerche & AURORA",
    "album": "Avatars of Love",
    "year": 2022,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/e33c3234341f7f4dcb254cce8799ffc3/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/alone-in-the-night.mp3",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "storm-wu-qing-feng",
    "title": "Storm (feat. AURORA)",
    "artist": "Wu Qing-feng & AURORA",
    "album": "Storm - Single",
    "year": 2022,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/a1725c4a75dce35598e974f1eff0ca5d/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/storm-wu-qing-feng.mp3",
    "difficulty": "hard",
    "isFeature": true
  },
  {
    "id": "helvegen-wardruna",
    "title": "Helvegen (Live)",
    "artist": "Wardruna & AURORA",
    "album": "Live at Midgardsblot",
    "year": 2018,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/163c691a73d21a943a9c20d65b17440b/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/helvegen-wardruna.mp3",
    "difficulty": "brutal",
    "isFeature": true
  },
  {
    "id": "a-place-to-call-home",
    "title": "A Place To Call Home",
    "artist": "AURORA",
    "album": "World of Warcraft: A Place To Call Home",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/3ab9b30857807ed34b000406258d743d/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/a-place-to-call-home.mp3",
    "difficulty": "medium",
    "isSoundtrack": true,
    "tags": [
      "World of Warcraft",
      "Soundtrack",
      "2024"
    ]
  },
  {
    "id": "you-cant-run-from-yourself",
    "title": "You Can’t Run From Yourself",
    "artist": "AURORA",
    "album": "You Can’t Run From Yourself (From \"Kaiju No. 8\")",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/0aeea8129cbf144483040604b42549fd/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/you-cant-run-from-yourself.mp3",
    "difficulty": "hard",
    "isSoundtrack": true,
    "tags": [
      "Kaiju No. 8",
      "Anime",
      "Soundtrack",
      "2024"
    ]
  },
  {
    "id": "animal-soul",
    "title": "Animal Soul",
    "artist": "AURORA",
    "album": "Animal Soul",
    "year": 2024,
    "artwork": "https://cdn-images.dzcdn.net/images/cover/39594a62973b34fd34c4ba47593e141a/1000x1000-000000-80-0-0.jpg",
    "previewUrl": "./audio/animal-soul.mp3",
    "difficulty": "medium",
    "tags": [
      "Single",
      "2024"
    ]
  }
];

export async function fetchLiveTrackDetails(song: Song): Promise<{ previewUrl: string; artwork: string }> {
  return {
    previewUrl: song.previewUrl,
    artwork: song.artwork,
  };
}

export async function fetchLiveTrackPreview(song: Song): Promise<string> {
  return song.previewUrl;
}
