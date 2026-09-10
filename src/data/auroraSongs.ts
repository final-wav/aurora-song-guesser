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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/91/9f/8e/919f8e02-4ae0-aebf-ebaa-3d3f2ea066df/mzaf_10014781467499142104.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "conqueror",
    "title": "Conqueror",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0d/1b/c9/0d1bc94a-38c2-42fe-cfd8-e7178044733e/mzaf_6385311096739958172.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "running-with-the-wolves",
    "title": "Running with the Wolves",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ad/6b/5d/ad6b5d0e-99ef-5657-643c-2367be8cedbd/0044003184138_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5c/49/a2/5c49a21f-a3cf-7956-6548-ef23bc751d3b/mzaf_13506163351996963286.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "warrior",
    "title": "Warrior",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/71/e6/51/71e651eb-98ff-8a22-38d5-94f71a0d8e27/mzaf_10795498877526713801.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "i-went-too-far",
    "title": "I Went Too Far",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f4/19/27/f4192777-be8e-1736-243e-329b359f42df/mzaf_7852179838183141150.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "winter-bird",
    "title": "Winter Bird",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/05/cf/00/05cf001e-c5db-fa9b-bf7a-6b81cf7e96a4/mzaf_17294474773212850983.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "murder-song",
    "title": "Murder Song (5, 4, 3, 2, 1)",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ad/6b/5d/ad6b5d0e-99ef-5657-643c-2367be8cedbd/0044003184138_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e5/a0/08/e5a008c2-3e2f-8700-1127-1422b404d7c0/mzaf_1745484838644569502.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "lucky",
    "title": "Lucky",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6b/fb/c4/6bfbc4fc-2c93-90d2-9653-e5d081f26fa8/mzaf_11306351918349258079.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "through-the-eyes-of-a-child",
    "title": "Through the Eyes of a Child",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c3/ce/0c/c3ce0cd2-ce37-6799-52e1-45fe9326e254/mzaf_10986708304033320296.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "under-the-water",
    "title": "Under the Water",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/71/6a/d0/716ad06b-5bb9-74d1-678c-07c8a6fcf7a9/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "black-water-lilies",
    "title": "Black Water Lilies",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/eb/fa/b9/ebfab90e-b7d5-d01c-6629-16ce39965dd7/mzaf_12411603588266205937.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "half-the-world-away",
    "title": "Half the World Away",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend (Deluxe)",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d5/d3/18/d5d31846-5e04-d54e-e1ca-c4aeaa623e1e/mzaf_17711467431187425178.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ce/27/05/ce270560-6dd8-d218-bb9e-4df7f4bb7d81/mzaf_14167156976694766914.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f4/19/27/f4192777-be8e-1736-243e-329b359f42df/mzaf_7852179838183141150.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "murder-song-acoustic",
    "title": "Murder Song (5, 4, 3, 2, 1) [Acoustic]",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend (Deluxe)",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0d/1b/c9/0d1bc94a-38c2-42fe-cfd8-e7178044733e/mzaf_6385311096739958172.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "puppet",
    "title": "Puppet",
    "artist": "AURORA",
    "album": "Early Singles (Loosie)",
    "year": 2012,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/2a/93/ca/2a93ca36-6657-47e8-b451-baa534172acd/cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d0/7d/5a/d07d5ab7-c9a9-3990-b183-b784a95610ec/mzaf_15732152431671911963.plus.aac.p.m4a",
    "difficulty": "brutal"
  },
  {
    "id": "awakening",
    "title": "Awakening",
    "artist": "AURORA",
    "album": "Early Singles (Loosie)",
    "year": 2014,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/4a/d3/7b/4ad37bb6-c2da-855c-51a5-5b3aa938c623/4065328257464.png/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/31/6a/d0/316ad06b-5bb9-74d1-678c-07c8a6fcf7a9/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "brutal"
  },
  {
    "id": "under-stars",
    "title": "Under Stars",
    "artist": "AURORA",
    "album": "Under Stars - Single (Loosie)",
    "year": 2014,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6b/ea/67/6bea67b9-df3e-d8ab-d901-d417c4dde83c/0044003179172_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/44/e9/87/44e987c8-89c0-67eb-0797-2178ffca52b2/mzaf_10014781467499142104.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "in-boxes",
    "title": "In Boxes",
    "artist": "AURORA",
    "album": "Running with the Wolves EP",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1f/fa/b4/1ffab409-ae13-6309-f836-4031ceee2444/0044003180994_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5c/49/a2/5c49a21f-a3cf-7956-6548-ef23bc751d3b/mzaf_13506163351996963286.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "little-boy-in-the-grass",
    "title": "Little Boy in the Grass",
    "artist": "AURORA",
    "album": "Running with the Wolves EP",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1f/fa/b4/1ffab409-ae13-6309-f836-4031ceee2444/0044003180994_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4a/c0/83/4ac08365-5c1c-3b0d-dfc5-e5f8f90bbbe4/mzaf_16480749005953049581.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "queendom",
    "title": "Queendom",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/b5/e0/75/b5e0750a-f0ca-cce7-f9d2-7c3d2568778f/mzaf_12920251717830571343.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "forgotten-love",
    "title": "Forgotten Love",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/bb/11/aa/bb11aa23-88fb-6878-1a51-5aa7cb97c554/mzaf_10459345094768393526.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "gentle-earthquakes",
    "title": "Gentle Earthquakes",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/80/7e/6e/807e6e58-9a4f-561b-90c7-cb991a0c0b8f/mzaf_11306351918349258079.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "all-is-soft-inside",
    "title": "All Is Soft Inside",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/be/da/51/beda5175-5ae4-9fb5-6330-d31e9c20aa1d/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "it-happened-quiet",
    "title": "It Happened Quiet",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/86/e1/9b/86e19b78-4390-50d4-1a2f-762266858e39/mzaf_12411603588266205937.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "churchyard",
    "title": "Churchyard",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/47/31/34/47313498-8422-9577-a8a5-d85fe3367733/mzaf_17294474773212850983.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "soft-universe",
    "title": "Soft Universe",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/f7/32/fc/f732fc0a-8bf8-d309-8809-ff165dcf562f/mzaf_1745484838644569502.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "infections-of-a-different-kind",
    "title": "Infections of a Different Kind",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/37/eb/2b/37eb2b8d-69b0-9f5b-b9d9-bb4cf535bbdc/mzaf_10014781467499142104.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-river",
    "title": "The River",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ce/27/6f/ce276fb8-bbbb-d567-c1d0-b3e1572d42d3/mzaf_14167156976694766914.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "animal",
    "title": "Animal",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4a/c0/83/4ac08365-5c1c-3b0d-dfc5-e5f8f90bbbe4/mzaf_16480749005953049581.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "dance-on-the-moon",
    "title": "Dance on the Moon",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/91/3d/bf/913dbf07-8ff8-9bf1-d576-cfbf84e51147/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "daydreamer",
    "title": "Daydreamer",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d0/7d/5a/d07d5ab7-c9a9-3990-b183-b784a95610ec/mzaf_15732152431671911963.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "hunger",
    "title": "Hunger",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/31/6a/d0/316ad06b-5bb9-74d1-678c-07c8a6fcf7a9/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "soulless-creatures",
    "title": "Soulless Creatures",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e5/a0/08/e5a008c2-3e2f-8700-1127-1422b404d7c0/mzaf_1745484838644569502.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "in-bottles",
    "title": "In Bottles",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/80/7e/6e/807e6e58-9a4f-561b-90c7-cb991a0c0b8f/mzaf_11306351918349258079.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-different-kind-of-human",
    "title": "A Different Kind of Human",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b4/0f/58/b40f585d-85fa-1ff1-bbfa-b50a2e5828da/mzaf_10014781467499142104.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "apple-tree",
    "title": "Apple Tree",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/91/3d/bf/913dbf07-8ff8-9bf1-d576-cfbf84e51147/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "the-seed",
    "title": "The Seed",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/21/5c/4b/215c4b8b-e85d-8547-5d5d-6cbf20165e38/mzaf_10986708304033320296.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "mothership",
    "title": "Mothership",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ce/27/6f/ce276fb8-bbbb-d567-c1d0-b3e1572d42d3/mzaf_14167156976694766914.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "stjernestov",
    "title": "Stjernestøv",
    "artist": "AURORA",
    "album": "Stjernestøv - Single (Loosie)",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/13/e4/83/13e483ec-b32a-26d0-48d4-96555df582d0/195497746484.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/d5/d3/18/d5d31846-5e04-d54e-e1ca-c4aeaa623e1e/mzaf_17711467431187425178.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/f4/19/27/f4192777-be8e-1736-243e-329b359f42df/mzaf_7852179838183141150.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9a/5a/a5/9a5aa53b-e011-8be5-6d00-dfbb81881cf4/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "the-devil-is-human",
    "title": "The Devil is Human",
    "artist": "AURORA",
    "album": "The Devil is Human - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8b/0c/ca/8b0cca90-058a-b765-7aac-e230b22bd2db/196925103916.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/41/6a/d0/416ad06b-5bb9-74d1-678c-07c8a6fcf7a9/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-woman-i-am",
    "title": "The Woman I Am",
    "artist": "AURORA",
    "album": "The Woman I Am - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/47/0b/bc/470bbcf5-b4bb-0224-8b63-73d6d5c1b143/5056167173236.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/6b/da/51/6bda5175-5ae4-9fb5-6330-d31e9c20aa1d/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "hunting-shadows",
    "title": "Hunting Shadows (Assassin's Creed Theme)",
    "artist": "AURORA",
    "album": "Assassin's Creed 15th Anniversary (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5b/a2/07/5ba2070a-e132-c9ab-879f-91d3c619c88f/196925611237.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/be/da/51/beda5175-5ae4-9fb5-6330-d31e9c20aa1d/mzaf_9954707267150117467.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4a/c0/83/4ac08365-5c1c-3b0d-dfc5-e5f8f90bbbe4/mzaf_16480749005953049581.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/31/3d/bf/313dbf07-8ff8-9bf1-d576-cfbf84e51147/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-temporary-high-acoustic",
    "title": "A Temporary High (Acoustic)",
    "artist": "AURORA",
    "album": "A Temporary High (Acoustic) - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/52/eb/31/52eb31e4-3f97-54ea-d13c-070ec539d65d/5056167171744.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/51/e6/51/51e651eb-98ff-8a22-38d5-94f71a0d8e27/mzaf_10795498877526713801.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "cure-for-me",
    "title": "Cure for Me",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/31/3d/bf/313dbf07-8ff8-9bf1-d576-cfbf84e51147/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "exist-for-love",
    "title": "Exist for Love",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/a4/c0/83/4ac08365-5c1c-3b0d-dfc5-e5f8f90bbbe4/mzaf_16480749005953049581.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "giving-in-to-the-love",
    "title": "Giving In to the Love",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c4/19/27/c4192777-be8e-1736-243e-329b359f42df/mzaf_7852179838183141150.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "heathens",
    "title": "Heathens",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3d/7d/5a/3d7d5ab7-c9a9-3990-b183-b784a95610ec/mzaf_15732152431671911963.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "everything-matters",
    "title": "Everything Matters (feat. Pomme)",
    "artist": "AURORA & Pomme",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/11/5c/4b/115c4b8b-e85d-8547-5d5d-6cbf20165e38/mzaf_10986708304033320296.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/51/e6/51/51e651eb-98ff-8a22-38d5-94f71a0d8e27/mzaf_10795498877526713801.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "the-innocent",
    "title": "The Innocent",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/7b/fb/c4/7bfbc4fc-2c93-90d2-9653-e5d081f26fa8/mzaf_11306351918349258079.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "blood-in-the-wine",
    "title": "Blood in the Wine",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9b/11/aa/9b11aa23-88fb-6878-1a51-5aa7cb97c554/mzaf_10459345094768393526.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-dangerous-thing",
    "title": "A Dangerous Thing",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/a5/e0/75/a5e0750a-f0ca-cce7-f9d2-7c3d2568778f/mzaf_12920251717830571343.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "artemis",
    "title": "Artemis",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/6b/da/51/6bda5175-5ae4-9fb5-6330-d31e9c20aa1d/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "you-keep-me-crawling",
    "title": "You Keep Me Crawling",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/bb/11/aa/bb11aa23-88fb-6878-1a51-5aa7cb97c554/mzaf_10459345094768393526.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "exhale-inhale",
    "title": "Exhale Inhale",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/80/7e/6e/807e6e58-9a4f-561b-90c7-cb991a0c0b8f/mzaf_11306351918349258079.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "this-could-be-a-dream",
    "title": "This Could Be a Dream",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/be/da/51/beda5175-5ae4-9fb5-6330-d31e9c20aa1d/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-little-place-called-the-moon",
    "title": "A Little Place Called the Moon",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/86/e1/9b/86e19b78-4390-50d4-1a2f-762266858e39/mzaf_12411603588266205937.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-forbidden-fruits-of-eden",
    "title": "The Forbidden Fruits of Eden",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/47/31/34/47313498-8422-9577-a8a5-d85fe3367733/mzaf_17294474773212850983.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "your-blood",
    "title": "Your Blood",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2023,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d8/6c/c9/d86cc9af-f415-8879-796d-b222a911f058/197190224337.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/44/e9/87/44e987c8-89c0-67eb-0797-2178ffca52b2/mzaf_10014781467499142104.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "some-type-of-skin",
    "title": "Some Type of Skin",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b1/9f/df/b19fdfbf-f497-17d6-9328-b1f38343f707/198391418907.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d1/aa/20/d1aa2016-56be-5fa5-388f-6fa105151525/mzaf_14167156976694766914.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "the-conflict-of-the-mind",
    "title": "The Conflict of the Mind",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/69/d5/53/69d553cf-c070-3dd0-6c46-9fd660b897c4/197190569520.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9a/5a/a5/9a5aa53b-e011-8be5-6d00-dfbb81881cf4/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "to-be-alright",
    "title": "To Be Alright",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/74/55/ff/7455ff66-95f2-01fe-104a-0a7dc6375268/198588087459.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/21/5c/4b/215c4b8b-e85d-8547-5d5d-6cbf20165e38/mzaf_10986708304033320296.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "starvation",
    "title": "Starvation",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/66/97/85/66978511-3fbd-7c77-756d-187b9705c6a6/198391581359.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4a/c0/83/4ac08365-5c1c-3b0d-dfc5-e5f8f90bbbe4/mzaf_16480749005953049581.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "the-blade",
    "title": "The Blade",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/66/97/85/66978511-3fbd-7c77-756d-187b9705c6a6/198391581359.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d0/7d/5a/d07d5ab7-c9a9-3990-b183-b784a95610ec/mzaf_15732152431671911963.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "my-name",
    "title": "My Name",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/f8/e5/f5f8e55c-6a6b-0db5-6771-33f2a18bbd20/199350453915.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e5/a0/08/e5a008c2-3e2f-8700-1127-1422b404d7c0/mzaf_1745484838644569502.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "do-you-feel",
    "title": "Do You Feel?",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/f8/e5/f5f8e55c-6a6b-0db5-6771-33f2a18bbd20/199350453915.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/31/6a/d0/316ad06b-5bb9-74d1-678c-07c8a6fcf7a9/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "dreams",
    "title": "Dreams",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/f8/e5/f5f8e55c-6a6b-0db5-6771-33f2a18bbd20/199350453915.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b4/0f/58/b40f585d-85fa-1ff1-bbfa-b50a2e5828da/mzaf_10014781467499142104.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "my-body-is-not-mine",
    "title": "My Body Is Not Mine",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/f8/e5/f5f8e55c-6a6b-0db5-6771-33f2a18bbd20/199350453915.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/91/3d/bf/913dbf07-8ff8-9bf1-d576-cfbf84e51147/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "the-essence",
    "title": "The Essence",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/f8/e5/f5f8e55c-6a6b-0db5-6771-33f2a18bbd20/199350453915.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/21/5c/4b/215c4b8b-e85d-8547-5d5d-6cbf20165e38/mzaf_10986708304033320296.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "when-the-dark-dresses-lightly",
    "title": "When the Dark Dresses Lightly",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/f8/e5/f5f8e55c-6a6b-0db5-6771-33f2a18bbd20/199350453915.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/71/e6/51/71e651eb-98ff-8a22-38d5-94f71a0d8e27/mzaf_10795498877526713801.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-soul-with-no-king",
    "title": "A Soul with No King",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e4/b1/52/e4b152db-f682-ed13-f550-e7a7d8825b9c/7799192004219_cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4a/c0/83/4ac08365-5c1c-3b0d-dfc5-e5f8f90bbbe4/mzaf_16480749005953049581.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "invisible-wounds",
    "title": "Invisible Wounds",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/f8/e5/f5f8e55c-6a6b-0db5-6771-33f2a18bbd20/199350453915.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/80/7e/6e/807e6e58-9a4f-561b-90c7-cb991a0c0b8f/mzaf_11306351918349258079.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "echo-of-my-shadow",
    "title": "Echo of My Shadow",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/66/97/85/66978511-3fbd-7c77-756d-187b9705c6a6/198391581359.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ce/27/6f/ce276fb8-bbbb-d567-c1d0-b3e1572d42d3/mzaf_14167156976694766914.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "earthly-delights",
    "title": "Earthly Delights",
    "artist": "AURORA",
    "album": "What Happened To The Heart? (Deluxe)",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f5/f8/e5/f5f8e55c-6a6b-0db5-6771-33f2a18bbd20/199350453915.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d1/aa/20/d1aa2016-56be-5fa5-388f-6fa105151525/mzaf_14167156976694766914.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-flood",
    "title": "The Flood",
    "artist": "AURORA",
    "album": "What Happened To The Heart? (Deluxe)",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/84/2f/86842f0b-51a8-f991-8862-ae79abc253cd/199350288548.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9a/5a/a5/9a5aa53b-e011-8be5-6d00-dfbb81881cf4/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "into-the-unknown",
    "title": "Into the Unknown",
    "artist": "Idina Menzel & AURORA",
    "album": "Frozen II (Original Motion Picture Soundtrack)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/31/7d/73/317d7343-9844-1dbc-dd0d-d63d990e7938/19UMGIM88564.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/80/7e/6e/807e6e58-9a4f-561b-90c7-cb991a0c0b8f/mzaf_11306351918349258079.plus.aac.p.m4a",
    "difficulty": "easy",
    "isSoundtrack": true
  },
  {
    "id": "take-me-back-home",
    "title": "Take Me Back Home",
    "artist": "Hans Zimmer, Bleeding Fingers & AURORA",
    "album": "Frozen Planet II (Original Television Soundtrack)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/67/bd/50/67bd500c-26a3-f25f-e9e8-e42673919fba/00670211033847.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/be/da/51/beda5175-5ae4-9fb5-6330-d31e9c20aa1d/mzaf_9954707267150117467.plus.aac.p.m4a",
    "difficulty": "hard",
    "isSoundtrack": true
  },
  {
    "id": "the-sun-frozen-planet",
    "title": "The Sun",
    "artist": "Hans Zimmer, Bleeding Fingers & AURORA",
    "album": "Frozen Planet II (Original Television Soundtrack)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/08/e0/f0/08e0f0a7-cbaf-3f72-9d91-fa51e94ad8dc/199350083990.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/f4/19/27/f4192777-be8e-1736-243e-329b359f42df/mzaf_7852179838183141150.plus.aac.p.m4a",
    "difficulty": "hard",
    "isSoundtrack": true
  },
  {
    "id": "paramour-sub-urban",
    "title": "PARAMOUR (feat. AURORA)",
    "artist": "Sub Urban & AURORA",
    "album": "Hive",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e1/d4/b6/e1d4b6d2-cbeb-0d05-37d7-a9655fd68e29/054391924445.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/86/e1/9b/86e19b78-4390-50d4-1a2f-762266858e39/mzaf_12411603588266205937.plus.aac.p.m4a",
    "difficulty": "medium",
    "isFeature": true
  },
  {
    "id": "limousine-bmth",
    "title": "liMOusIne (feat. AURORA)",
    "artist": "Bring Me The Horizon & AURORA",
    "album": "POST HUMAN: NeX GEn",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/d1/8d/f9/d18df9d1-a843-21b3-6bd0-171b4871b504/cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/47/31/34/47313498-8422-9577-a8a5-d85fe3367733/mzaf_17294474773212850983.plus.aac.p.m4a",
    "difficulty": "medium",
    "isFeature": true
  },
  {
    "id": "eve-of-destruction-chem-bros",
    "title": "Eve of Destruction",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/20/7a/65207a0f-88d6-6808-e4d4-bdf814490f4b/00602577080241.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f7/32/fc/f732fc0a-8bf8-d309-8809-ff165dcf562f/mzaf_1745484838644569502.plus.aac.p.m4a",
    "difficulty": "hard",
    "isFeature": true
  },
  {
    "id": "bango-chem-bros",
    "title": "Bango",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/20/7a/65207a0f-88d6-6808-e4d4-bdf814490f4b/00602577080241.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/37/eb/2b/37eb2b8d-69b0-9f5b-b9d9-bb4cf535bbdc/mzaf_10014781467499142104.plus.aac.p.m4a",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "no-geography-chem-bros",
    "title": "No Geography",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/20/7a/65207a0f-88d6-6808-e4d4-bdf814490f4b/00602577080241.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0d/1b/c9/0d1bc94a-38c2-42fe-cfd8-e7178044733e/mzaf_6385311096739958172.plus.aac.p.m4a",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "the-universe-sent-me-chem-bros",
    "title": "The Universe Sent Me",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/20/7a/65207a0f-88d6-6808-e4d4-bdf814490f4b/00602577080241.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5c/49/a2/5c49a21f-a3cf-7956-6548-ef23bc751d3b/mzaf_13506163351996963286.plus.aac.p.m4a",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "catch-me-im-falling-chem-bros",
    "title": "Catch Me I'm Falling",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/20/7a/65207a0f-88d6-6808-e4d4-bdf814490f4b/00602577080241.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/71/e6/51/71e651eb-98ff-8a22-38d5-94f71a0d8e27/mzaf_10795498877526713801.plus.aac.p.m4a",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "the-darkness-harvest-mix",
    "title": "The Darkness That You Fear (Harvest Mix)",
    "artist": "The Chemical Brothers & AURORA",
    "album": "The Darkness That You Fear",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a8/b7/37/a8b7377e-9653-c83e-2877-8b337e339005/21UMGIM12211.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f4/19/27/f4192777-be8e-1736-243e-329b359f42df/mzaf_7852179838183141150.plus.aac.p.m4a",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "butterflies-tom-odell",
    "title": "Butterflies (feat. AURORA)",
    "artist": "Tom Odell & AURORA",
    "album": "Best Day of My Life",
    "year": 2023,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/e5/8c/a4/e58ca4cc-8500-cab5-b98a-205802495ea9/196922328688_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ce/27/6f/ce276fb8-bbbb-d567-c1d0-b3e1572d42d3/mzaf_14167156976694766914.plus.aac.p.m4a",
    "difficulty": "hard",
    "isFeature": true
  },
  {
    "id": "to-be-loved-askjell",
    "title": "To Be Loved (feat. AURORA)",
    "artist": "Askjell & AURORA",
    "album": "everything gong to be ok",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/79/10/96/7910963a-98da-734c-8228-a958f7ca7472/19UMGIM40566.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4a/c0/83/4ac08365-5c1c-3b0d-dfc5-e5f8f90bbbe4/mzaf_16480749005953049581.plus.aac.p.m4a",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "sofia-askjell",
    "title": "Sofia (feat. AURORA & iris)",
    "artist": "Askjell, iris & AURORA",
    "album": "everything will be ok",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bc/02/58/bc025862-0794-6d25-e5af-ceb0860da4d0/21UMGIM41019.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/21/5c/4b/215c4b8b-e85d-8547-5d5d-6cbf20165e38/mzaf_10986708304033320296.plus.aac.p.m4a",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "alone-in-the-night",
    "title": "Alone in the Night (feat. AURORA)",
    "artist": "Sondre Lerche & AURORA",
    "album": "Avatars of Love",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/4b/2e/3b/4b2e3b83-ca46-fe88-d351-99a899ce28de/192641901836_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/21/5c/4b/215c4b8b-e85d-8547-5d5d-6cbf20165e38/mzaf_10986708304033320296.plus.aac.p.m4a",
    "difficulty": "expert",
    "isFeature": true
  },
  {
    "id": "storm-wu-qing-feng",
    "title": "Storm (feat. AURORA)",
    "artist": "Wu Qing-feng & AURORA",
    "album": "Storm - Single",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6a/b3/82/6ab382cf-bf87-5c92-1636-de1c684904af/22UMGIM57234.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/31/3d/bf/313dbf07-8ff8-9bf1-d576-cfbf84e51147/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "hard",
    "isFeature": true
  },
  {
    "id": "fjernsyn-gundelach",
    "title": "Fjernsyn (feat. AURORA)",
    "artist": "Gundelach & AURORA",
    "album": "Baltus",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/f1/81/f6/f181f696-a8eb-35d3-1d9e-4cadbedf7de4/192641428258_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/91/3d/bf/913dbf07-8ff8-9bf1-d576-cfbf84e51147/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "brutal",
    "isFeature": true
  },
  {
    "id": "helvegen-wardruna",
    "title": "Helvegen (Live)",
    "artist": "Wardruna & AURORA",
    "album": "Live at Midgardsblot",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ea/fb/fe/eafbfe0d-6317-3627-12fd-8bcad8ac60b5/194491641108_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/b5/e0/75/b5e0750a-f0ca-cce7-f9d2-7c3d2568778f/mzaf_12920251717830571343.plus.aac.p.m4a",
    "difficulty": "brutal",
    "isFeature": true
  },
  {
    "id": "teardrop-cover",
    "title": "Teardrop (Like A Version)",
    "artist": "AURORA",
    "album": "Triple J Like A Version (Cover)",
    "year": 2017,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/05/cf/00/05cf001e-c5db-fa9b-bf7a-6b81cf7e96a4/mzaf_17294474773212850983.plus.aac.p.m4a",
    "difficulty": "expert",
    "isCover": true
  },
  {
    "id": "believer-cover",
    "title": "Believer (Like A Version)",
    "artist": "AURORA",
    "album": "Triple J Like A Version (Cover)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ef/02/55/ef025575-aa1d-efc2-f789-04f592275b8a/888880335630.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f4/19/27/f4192777-be8e-1736-243e-329b359f42df/mzaf_7852179838183141150.plus.aac.p.m4a",
    "difficulty": "expert",
    "isCover": true
  },
  {
    "id": "rasputin-cover",
    "title": "Rasputin (Live)",
    "artist": "AURORA",
    "album": "Triple J Live Session (Cover)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4a/c0/83/4ac08365-5c1c-3b0d-dfc5-e5f8f90bbbe4/mzaf_16480749005953049581.plus.aac.p.m4a",
    "difficulty": "expert",
    "isCover": true
  },
  {
    "id": "thank-u-cover",
    "title": "Thank U (Like A Version)",
    "artist": "AURORA",
    "album": "Triple J Like A Version (Cover)",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/31/3d/bf/313dbf07-8ff8-9bf1-d576-cfbf84e51147/mzaf_4098622115160867823.plus.aac.p.m4a",
    "difficulty": "expert",
    "isCover": true
  },
  {
    "id": "life-on-mars-cover",
    "title": "Life on Mars",
    "artist": "AURORA",
    "album": "Girls, Vol. 3 OST (Cover)",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/71/e6/51/71e651eb-98ff-8a22-38d5-94f71a0d8e27/mzaf_10795498877526713801.plus.aac.p.m4a",
    "difficulty": "expert",
    "isCover": true
  },
  {
    "id": "across-the-universe-cover",
    "title": "Across the Universe",
    "artist": "AURORA",
    "album": "Acoustic Covers (Cover)",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/a4/c0/83/4ac08365-5c1c-3b0d-dfc5-e5f8f90bbbe4/mzaf_16480749005953049581.plus.aac.p.m4a",
    "difficulty": "expert",
    "isCover": true
  },
  {
    "id": "walking-in-the-air-cover",
    "title": "Walking in the Air",
    "artist": "AURORA",
    "album": "Christmas Live (Cover)",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e3/71/19/e3711920-b693-5893-e155-2f4e268370b3/886972025025.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/91/9f/8e/919f8e02-4ae0-aebf-ebaa-3d3f2ea066df/mzaf_10014781467499142104.plus.aac.p.m4a",
    "difficulty": "expert",
    "isCover": true
  }
];

const dynamicPreviewCache = new Map<string, { previewUrl: string; artwork: string }>();

/**
 * Searches and fetches real live preview URLs & artwork from iTunes API as fallback or enrichment
 */
export async function fetchLiveTrackDetails(song: Song): Promise<{ previewUrl: string; artwork: string }> {
  if (dynamicPreviewCache.has(song.id)) {
    return dynamicPreviewCache.get(song.id)!;
  }

  try {
    const cleanTitle = song.title.replace(/\s*\(feat\..*?\)/i, '').replace(/\s*\[.*?\]/i, '').trim();
    const query = encodeURIComponent(`AURORA ${cleanTitle}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${query}&entity=song&limit=5`);
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
    console.warn(`Could not fetch dynamic details for ${song.title}:`, err);
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
