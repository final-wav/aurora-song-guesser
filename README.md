# 🌸 AURORA — Song Guesser

An audio-snippet music guessing game dedicated entirely to the Norwegian artist **AURORA** — featuring her complete discography across all studio albums, standalone singles ("loosies"), acoustic sessions, movie soundtracks, covers, and collaborations.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and the precision **Web Audio API** for millisecond-exact snippet playback without audio pops or clicks.

---

## 🎮 Features

- **Pioneering 0.10s Snippet Playback**: Starts with an ultra-short 0.10-second snippet (10,000 points) and expands step-by-step to 0.50s, 1.0s, 3.0s, 5.0s, 10.0s, and 30s.
- **5 Difficulty Tiers**:
  - `EASY`: Major singles & greatest hits (*Runaway*, *Cure for Me*, *Into the Unknown*).
  - `MEDIUM`: Full album tracks & prominent collaborations.
  - `HARD`: Deep cuts, standalone singles, early EPs, and rare soundtrack songs.
  - `EXPERT`: Snippet starts at a random mid-song timestamp instead of the intro!
  - `BRUTAL`: Ultra-short micro-slices anywhere across the entire complete discography.
- **5-Round Match & Daily Mode**:
  - 5-Round Session with a maximum score of **50,000 points**.
  - Daily Challenge with a deterministic seed for every player worldwide.
- **Precision Audio Engine**:
  - Web Audio API (`AudioContext`, `AudioBufferSourceNode`) eliminates browser delay and scheduling jitter.
  - 15ms linear micro-gain envelope prevents loud pops/clicks on short cuts.
  - Authentic waveform peak extraction from PCM channel data.
- **Smart Song Search**:
  - Fast keyboard-navigable autocomplete with album art, release year, and collaboration badges.
- **Stats & Social Sharing**:
  - Win rates, guess distribution charts, current streaks, and Heardle/Wordle-style emoji result sharing (`🟩🟨⬛`).

---

## 💿 Complete Discography Included

- **Studio Albums**:
  - *All My Demons Greeting Me as a Friend* (2016)
  - *Infections of a Different Kind (Step 1)* (2018)
  - *A Different Kind of Human (Step 2)* (2019)
  - *The Gods We Can Touch* (2022)
  - *What Happened To The Heart?* (2024)
- **Standalone Singles & Loosies**:
  - *Puppet* (2012), *Awakening* (2014), *Under Stars* (2014)
  - *In Boxes*, *Little Boy in the Grass* (2015)
  - *Stjernestøv* (2020)
  - *A Potion for Love* (2022), *The Devil is Human* (2022), *The Woman I Am* (2022)
  - *Hunting Shadows* (2022), *Pink Moon* (2023)
  - *Earthly Delights*, *The Flood*, *The Dark* (2024)
- **Features & Collaborations**:
  - Bring Me The Horizon (*liMOusIne*)
  - Sub Urban (*PARAMOUR*)
  - The Chemical Brothers (*Eve of Destruction*, *Bango*, *No Geography*, *The Universe Sent Me*, *Catch Me I'm Falling*, *The Darkness That You Fear*)
  - Askjell (*To Be Loved*, *Sofia*)
  - Tom Odell (*Butterflies*)
  - Sondre Lerche (*Alone in the Night*)
  - Wu Qing-feng (*Storm*)
  - Gundelach (*Fjernsyn*)
  - Wardruna (*Helvegen*)
  - Idina Menzel (*Into the Unknown*)
  - Hans Zimmer & Bleeding Fingers (*Take Me Back Home*, *The Sun*)
- **Covers & Rarities**:
  - *Half the World Away* (Oasis)
  - *Teardrop* (Massive Attack)
  - *Believer* (Imagine Dragons)
  - *Rasputin* (Boney M.)
  - *Thank U* (Alanis Morissette)
  - *Life on Mars* (David Bowie)
  - *Across the Universe* (The Beatles)
  - *Nature Boy* (Nat King Cole)
  - *Walking in the Air*

---

## 📜 Audio Disclaimer
This project is an open-source, non-profit fan tribute. Audio snippets are streamed from official 30-second preview endpoints (Apple Music / iTunes API). All rights to the songs and recordings belong to AURORA, Petroleum Records, Decca, and Universal Music Group.
