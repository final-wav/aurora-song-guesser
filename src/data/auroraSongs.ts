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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b4/77/b8/b477b8a7-01d6-37ca-fdaa-59831b750f05/mzaf_16307313298352295595.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "conqueror",
    "title": "Conqueror",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e9/d7/34/e9d7349c-ea94-e952-6d44-9d512dc2d1f6/mzaf_10778465784845889691.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "running-with-the-wolves",
    "title": "Running with the Wolves",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ad/6b/5d/ad6b5d0e-99ef-5657-643c-2367be8cedbd/0044003184138_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5b/1c/cc/5b1ccc68-19cd-e2d9-22de-5ae047f32fee/mzaf_1412725819725478767.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "warrior",
    "title": "Warrior",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8a/4d/b5/8a4db551-d140-ffcb-e010-1ca8014713e8/mzaf_18192866833814100521.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "i-went-too-far",
    "title": "I Went Too Far",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/21/b2/55/21b255f6-d94f-6cb6-248a-631685d4ef15/mzaf_17533451138290028703.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "winter-bird",
    "title": "Winter Bird",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8c/6b/ad/8c6bad7b-fc0a-a0e3-4fa0-620eeae79e53/mzaf_16781428815477056219.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "murder-song",
    "title": "Murder Song (5, 4, 3, 2, 1)",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6e/34/50/6e345092-c798-72f8-8870-f6472a248c05/mzaf_1757373244068441206.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "lucky",
    "title": "Lucky",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4c/2b/c8/4c2bc885-3768-06e5-af42-a751687899b2/mzaf_5953289856866368049.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "through-the-eyes-of-a-child",
    "title": "Through the Eyes of a Child",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c1/b1/dc/c1b1dce5-26a3-ebe8-9d55-8bfc3bb04ddf/mzaf_14673806019702673019.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "under-the-water",
    "title": "Under the Water",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/23/8d/da/238dda2b-518b-592d-b443-c85fe9d1ea8a/mzaf_5240019894108571190.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "black-water-lilies",
    "title": "Black Water Lilies",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend",
    "year": 2016,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2e/82/08/2e8208e8-3622-088b-4e97-a077c0cdd298/mzaf_16117740000766643030.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "half-the-world-away",
    "title": "Half the World Away",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend (Deluxe)",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c2/e3/7d/c2e37dbb-d09e-9475-93b0-ef61cc67ff3a/mzaf_16907013302341536043.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/00/b6/31/00b63134-2df8-6612-d097-0cf1a0e1a0a1/mzaf_12399138070223296821.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5c/59/f6/5c59f622-3cd1-89f2-a48e-c1aa554ca180/mzaf_5743848430665476333.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "murder-song-acoustic",
    "title": "Murder Song (5, 4, 3, 2, 1) [Acoustic]",
    "artist": "AURORA",
    "album": "All My Demons Greeting Me as a Friend (Deluxe)",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6e/34/50/6e345092-c798-72f8-8870-f6472a248c05/mzaf_1757373244068441206.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "puppet",
    "title": "Puppet",
    "artist": "AURORA",
    "album": "Early Singles (Loosie)",
    "year": 2012,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/2a/93/ca/2a93ca36-6657-47e8-b451-baa534172acd/cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/94/2d/85/942d8523-20bf-3c5c-0e29-0b26d7a3b117/mzaf_586115983449501316.plus.aac.p.m4a",
    "difficulty": "brutal"
  },
  {
    "id": "awakening",
    "title": "Awakening",
    "artist": "AURORA",
    "album": "Early Singles (Loosie)",
    "year": 2014,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/09/93/7d/09937dda-3f54-a958-73e8-3dd87b2ad7be/7071245127022_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f0/6e/00/f06e001d-d6b7-762f-c731-6a8a18192daf/mzaf_12065121251752947827.plus.aac.p.m4a",
    "difficulty": "brutal"
  },
  {
    "id": "under-stars",
    "title": "Under Stars",
    "artist": "AURORA",
    "album": "Under Stars - Single (Loosie)",
    "year": 2014,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6b/ea/67/6bea67b9-df3e-d8ab-d901-d417c4dde83c/0044003179172_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b9/0a/bd/b90abd54-b175-0aa4-de87-79f179a0989b/mzaf_5216430092829064249.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "in-boxes",
    "title": "In Boxes",
    "artist": "AURORA",
    "album": "Running with the Wolves EP",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1f/fa/b4/1ffab409-ae13-6309-f836-4031ceee2444/0044003180994_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/aa/8b/d2/aa8bd212-9963-8f9d-f8f1-9be9af9cc858/mzaf_9730551303776559895.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "little-boy-in-the-grass",
    "title": "Little Boy in the Grass",
    "artist": "AURORA",
    "album": "Running with the Wolves EP",
    "year": 2015,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1f/fa/b4/1ffab409-ae13-6309-f836-4031ceee2444/0044003180994_Cover.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c4/a6/90/c4a6902f-f7de-c4d4-5796-05d2137781c8/mzaf_11560051060441986535.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "queendom",
    "title": "Queendom",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4c/03/91/4c0391d1-2631-c7e9-a86d-9db3f39ee101/mzaf_9115994459068046135.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "forgotten-love",
    "title": "Forgotten Love",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/23/a3/f3/23a3f372-bf19-3074-3db6-cf1110bfbff2/mzaf_9876742062837648644.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "gentle-earthquakes",
    "title": "Gentle Earthquakes",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/28/8d/84/288d8439-f0e3-e75a-0507-a15adb58411f/mzaf_18362019069248486756.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "all-is-soft-inside",
    "title": "All Is Soft Inside",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/41/cf/40/41cf4044-d4c8-055f-83d3-71c026c24a6a/mzaf_10959056353061489033.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "it-happened-quiet",
    "title": "It Happened Quiet",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9b/40/88/9b408848-6338-807f-66de-251cbc7850d5/mzaf_18072780629343094769.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "churchyard",
    "title": "Churchyard",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b8/7e/5c/b87e5cd9-211c-fa8d-5ff3-8cd09497d166/mzaf_3495139004262461192.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "soft-universe",
    "title": "Soft Universe",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/74/42/86/74428650-4336-361d-0ace-95ee38a64e91/mzaf_668117700757320577.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "infections-of-a-different-kind",
    "title": "Infections of a Different Kind",
    "artist": "AURORA",
    "album": "Infections of a Different Kind (Step 1)",
    "year": 2018,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/88/87/5d888761-3de7-feb8-f078-1f54894b0f8e/mzaf_13873427910762734397.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-river",
    "title": "The River",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/47/b3/ee/47b3ee9b-5df4-0f10-5c79-e41970958dbd/mzaf_3958463929542155573.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "animal",
    "title": "Animal",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/99/e8/74/99e874eb-edd7-4f6d-145c-1630a525d859/mzaf_12362181673255542911.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "dance-on-the-moon",
    "title": "Dance on the Moon",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/83/96/28/839628a9-bc24-a7e5-03d8-8a7a4d96e5b8/mzaf_4301327488030185482.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "daydreamer",
    "title": "Daydreamer",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/02/5f/c1/025fc11c-af42-a97f-8655-3a580ef1192b/mzaf_1480930589136980742.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "hunger",
    "title": "Hunger",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/08/c1/3c/08c13c98-f6a7-d68f-a15a-b806d435de92/mzaf_1145419015209659084.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "soulless-creatures",
    "title": "Soulless Creatures",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d7/ae/14/d7ae1464-e1dc-f4a7-697a-8159d4b42b90/mzaf_12226029560752209749.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "in-bottles",
    "title": "In Bottles",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/81/e6/e2/81e6e2fa-f99e-0b4b-4613-b690e2710248/mzaf_12793859916961205444.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-different-kind-of-human",
    "title": "A Different Kind of Human",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/d1/30/9b/d1309b29-c024-6512-b585-f1b6483bf2c3/5056167160960.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e2/90/41/e290418d-801d-ec13-662e-f804c5051aaa/mzaf_11213020792328175341.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "apple-tree",
    "title": "Apple Tree",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d4/6a/b3/d46ab3ea-b11d-1fd6-0f01-8dd587f388ea/mzaf_12535310219378404647.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "the-seed",
    "title": "The Seed",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5b/31/a6/5b31a6e5-d0a6-fc7d-6fc9-36253e8da640/mzaf_11801837372620258180.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "mothership",
    "title": "Mothership",
    "artist": "AURORA",
    "album": "A Different Kind of Human (Step 2)",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/84/ae/d5/84aed5a6-c5b5-523b-c5fb-16066317fd7e/mzaf_4640646236168635579.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "stjernestov",
    "title": "Stjernestøv",
    "artist": "AURORA",
    "album": "Stjernestøv - Single (Loosie)",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/13/e4/83/13e483ec-b32a-26d0-48d4-96555df582d0/195497746484.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/9b/4c/d9/9b4cd90e-e279-ee3c-9752-854230fa1db7/mzaf_14667442065777848108.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/07/54/e3/0754e38d-8beb-2a93-1fc8-1b7675551c0d/mzaf_14475389348075576221.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/0b/94/4f/0b944f65-d01a-08c9-b91a-697f912fafeb/mzaf_2510014038802517929.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "the-devil-is-human",
    "title": "The Devil is Human",
    "artist": "AURORA",
    "album": "The Devil is Human - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8b/0c/ca/8b0cca90-058a-b765-7aac-e230b22bd2db/196925103916.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/4d/9e/21/4d9e2144-508a-9c35-4355-5d5e527d33a3/mzaf_1807271693715610391.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-woman-i-am",
    "title": "The Woman I Am",
    "artist": "AURORA",
    "album": "The Woman I Am - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/47/0b/bc/470bbcf5-b4bb-0224-8b63-73d6d5c1b143/5056167173236.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/3c/39/3e/3c393e11-319d-ae48-2762-63d6d7973194/mzaf_5060915554710419104.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "hunting-shadows",
    "title": "Hunting Shadows (Assassin's Creed Theme)",
    "artist": "AURORA",
    "album": "Assassin's Creed 15th Anniversary (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5b/a2/07/5ba2070a-e132-c9ab-879f-91d3c619c88f/196925611237.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0a/0d/f2/0a0df2da-c43f-5e38-f811-d48acd938cee/mzaf_4941328285431879692.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/06/7e/f7/067ef7db-2721-3edf-1d92-1e39bdc33c18/mzaf_4969598345170522978.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2c/88/51/2c8851b7-cba4-82be-41a2-f2272359385d/mzaf_18223789007783108641.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-temporary-high-acoustic",
    "title": "A Temporary High (Acoustic)",
    "artist": "AURORA",
    "album": "A Temporary High (Acoustic) - Single (Loosie)",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/52/eb/31/52eb31e4-3f97-54ea-d13c-070ec539d65d/5056167171744.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bc/56/a3/bc56a315-2456-e8d2-0633-c7e5c6c4ec32/mzaf_13658690658069815769.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "cure-for-me",
    "title": "Cure for Me",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2c/88/51/2c8851b7-cba4-82be-41a2-f2272359385d/mzaf_18223789007783108641.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "exist-for-love",
    "title": "Exist for Love",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2020,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f6/7d/cd/f67dcdc7-f73a-e2fa-7827-a0b2fc91a8c4/mzaf_11828278067169611473.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "giving-in-to-the-love",
    "title": "Giving In to the Love",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d3/fd/6b/d3fd6b7c-b055-d9d5-9559-adec532d3b3b/mzaf_2883858709642115864.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "heathens",
    "title": "Heathens",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2021,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e1/33/79/e1337976-0ff4-ddc9-95f1-066f775d5a8e/mzaf_13330976951654338623.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "everything-matters",
    "title": "Everything Matters (feat. Pomme)",
    "artist": "AURORA & Pomme",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7f/cb/11/7fcb1196-1438-1c92-7a5f-4d858e17f783/mzaf_3796420349543677183.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bc/56/a3/bc56a315-2456-e8d2-0633-c7e5c6c4ec32/mzaf_13658690658069815769.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "the-innocent",
    "title": "The Innocent",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1b/10/79/1b10795e-a358-e48d-714f-5d1e93621085/mzaf_13510735437627525094.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "blood-in-the-wine",
    "title": "Blood in the Wine",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3e/04/cb/3e04cb59-2068-fec4-6dda-f17409fb06fb/mzaf_8351356460443616901.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-dangerous-thing",
    "title": "A Dangerous Thing",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e6/29/1d/e6291da3-e4b8-f1a7-3809-b6367664034b/mzaf_10008441323881734700.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "artemis",
    "title": "Artemis",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cd/15/73/cd157307-7907-6f95-6309-f898038cbd4d/mzaf_343345547200656651.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "you-keep-me-crawling",
    "title": "You Keep Me Crawling",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/55/b1/49/55b149cc-bd32-35b3-5d15-937140f11981/mzaf_2316411034516298573.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "exhale-inhale",
    "title": "Exhale Inhale",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/67/bb/03/67bb038a-336a-eeb3-d50c-c671971cdb33/mzaf_2394451657746156297.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "this-could-be-a-dream",
    "title": "This Could Be a Dream",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b9/66/8c/b9668c27-95ea-b8c0-743f-9acfae63db50/mzaf_1868685608646774025.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "a-little-place-called-the-moon",
    "title": "A Little Place Called the Moon",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/db/41/f8db413b-2946-1362-c133-eb2536c1fa19/mzaf_12727453322716471402.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "the-forbidden-fruits-of-eden",
    "title": "The Forbidden Fruits of Eden",
    "artist": "AURORA",
    "album": "The Gods We Can Touch",
    "year": 2022,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d2/fe/39/d2fe396d-06a0-42fd-7d5f-ad8d05670449/mzaf_2961105296105385753.plus.aac.p.m4a",
    "difficulty": "hard"
  },
  {
    "id": "your-blood",
    "title": "Your Blood",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2023,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d8/6c/c9/d86cc9af-f415-8879-796d-b222a911f058/197190224337.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5a/1a/30/5a1a30f3-f9f5-707d-4cce-a2c41f866b47/mzaf_5835411270260201486.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "some-type-of-skin",
    "title": "Some Type of Skin",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b1/9f/df/b19fdfbf-f497-17d6-9328-b1f38343f707/198391418907.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a9/8b/fd/a98bfdd4-f72d-9418-60a5-78f185c15d98/mzaf_11885009924982712848.plus.aac.p.m4a",
    "difficulty": "easy"
  },
  {
    "id": "the-conflict-of-the-mind",
    "title": "The Conflict of the Mind",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/69/d5/53/69d553cf-c070-3dd0-6c46-9fd660b897c4/197190569520.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9f/00/4e/9f004e79-4f28-19a6-b31c-292b9b81831a/mzaf_9497270585824461134.plus.aac.p.m4a",
    "difficulty": "medium"
  },
  {
    "id": "to-be-alright",
    "title": "To Be Alright",
    "artist": "AURORA",
    "album": "What Happened To The Heart?",
    "year": 2024,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/74/55/ff/7455ff66-95f2-01fe-104a-0a7dc6375268/198588087459.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/11/64/33/116433a1-0b5a-b162-9c9f-7bd71e5d9bbf/mzaf_17997426667456712750.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/26/86/36/268636c8-3e23-dec0-6aa7-7dc081053c01/mzaf_15776616072801989318.plus.aac.p.m4a",
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
    "id": "tomora-please",
    "title": "Please",
    "artist": "TOMORA (AURORA & Tom Rowlands)",
    "album": "COME CLOSER",
    "year": 2026,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/10/7f/46107fb0-ccff-4370-49f4-3ddd29b2729c/25UM2IM08119.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7b/df/1d/7bdf1d4c-eb8e-3456-b6bc-586a1f99754a/mzaf_7111606817870741912.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fb/d1/8e/fbd18ed1-fceb-ee16-4aaa-7112ddf28e64/mzaf_14585520915246521667.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/34/00/23/3400234c-433d-95ae-ca19-6e2292eed96f/mzaf_921107273951418604.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/db/f3/f0/dbf3f048-41fd-91eb-6166-5fb189a50f21/mzaf_13369444948561044952.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dd/85/6c/dd856cc8-600b-57b0-c491-d7a898bd20ea/mzaf_10631308387674134375.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/af/5e/96af5ea1-5db4-a08b-0cfd-060ff6143148/mzaf_3889591112580011378.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c8/42/4e/c8424e59-8198-e733-c9d9-5dbf65dca8eb/mzaf_5251648526015924034.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/65/2e/91/652e91d2-bbaf-d349-6e05-9a3e429310d0/mzaf_15220199120743919593.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/54/7c/43/547c430f-a04c-58b0-ce82-79cded25f904/mzaf_16981891030846972311.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0d/b8/31/0db8312f-381c-d8ab-ae5e-f56f72cfe97c/mzaf_8428612459070382163.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/79/e6/10/79e61066-62cb-91bd-7083-98ec18d20703/mzaf_8351578238721476982.plus.aac.p.m4a",
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
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e9/27/20/e9272037-c3e9-477b-774a-3573108d97cb/mzaf_5774180020663843384.plus.aac.p.m4a",
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
    "id": "chemical-brothers-eve-of-destruction",
    "title": "Eve of Destruction (feat. AURORA)",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/20/7a/65207a0f-88d6-6808-e4d4-bdf814490f4b/00602577080241.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/ea/23/cfea239d-d17c-5363-b19b-5991b9dc5e79/mzaf_5304965978479019483.plus.aac.p.m4a",
    "difficulty": "hard",
    "isFeature": true,
    "tags": [
      "The Chemical Brothers",
      "No Geography",
      "Tom Rowlands",
      "Collab"
    ]
  },
  {
    "id": "chemical-brothers-bango",
    "title": "Bango (feat. AURORA)",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/20/7a/65207a0f-88d6-6808-e4d4-bdf814490f4b/00602577080241.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2d/f8/63/2df8638b-8f3d-e9f1-1581-f922c45744dc/mzaf_1008740640006240595.plus.aac.p.m4a",
    "difficulty": "hard",
    "isFeature": true,
    "tags": [
      "The Chemical Brothers",
      "No Geography",
      "Tom Rowlands",
      "Collab"
    ]
  },
  {
    "id": "chemical-brothers-no-geography",
    "title": "No Geography (feat. AURORA)",
    "artist": "The Chemical Brothers & AURORA",
    "album": "No Geography",
    "year": 2019,
    "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/20/7a/65207a0f-88d6-6808-e4d4-bdf814490f4b/00602577080241.rgb.jpg/600x600bb.jpg",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f3/8e/76/f38e76f5-329f-d286-fdeb-096ed59b6b0a/mzaf_3816286094182858470.plus.aac.p.m4a",
    "difficulty": "hard",
    "isFeature": true,
    "tags": [
      "The Chemical Brothers",
      "No Geography",
      "Tom Rowlands",
      "Collab"
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
