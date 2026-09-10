# 🌸 AURORA — Song Guesser

An audio-snippet music guessing game dedicated entirely to the Norwegian artist **AURORA** (including all studio albums, EPs, movie soundtracks, and collaborations/features).

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and the precision **Web Audio API** for millisecond-exact snippet playback without audio pops or clicks.

---

## 🎮 Game Features

- **Pioneering 0.10s Snippet Playback**: Starts with an ultra-short 0.10-second snippet (10,000 points) and expands step-by-step to 0.50s, 1.0s, 3.0s, 5.0s, and 30s.
- **5 Difficulty Tiers**:
  - `EASY`: Major singles & greatest hits (*Runaway*, *Cure for Me*, *Into the Unknown*).
  - `MEDIUM`: Full album tracks & prominent collaborations.
  - `HARD`: Deep cuts, early EPs, and rare soundtrack songs.
  - `EXPERT`: Snippet starts at a random mid-song position instead of the intro!
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

## 💿 Discography Included

- **Studio Albums**:
  - *All My Demons Greeting Me as a Friend* (2016)
  - *Infections of a Different Kind (Step 1)* (2018)
  - *A Different Kind of Human (Step 2)* (2019)
  - *The Gods We Can Touch* (2022)
  - *What Happened To The Heart?* (2024)
- **Features & Collaborations**:
  - The Chemical Brothers (*Eve of Destruction*, *Bango*, *No Geography*)
  - Bring Me The Horizon (*liMOusIne*)
  - Sub Urban (*PARAMOUR*)
  - Askjell (*To Be Loved*, *Sofia*)
  - Tom Odell (*Butterflies*)
  - Sondre Lerche (*Alone in the Night*)
  - Gundelach (*Fjernsyn*)
- **Soundtracks & Covers**:
  - *Into the Unknown* (Disney's Frozen II)
  - *Half the World Away* (Oasis)
  - *The Secret Garden* OST
  - *Hunting Shadows* (Assassin's Creed 15th Anniversary)

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd gallant-hubble

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment on Cloudflare Workers & Cloudflare Pages

### Option A: Cloudflare Workers (Static Assets)
The project includes `wrangler.jsonc` preconfigured for Cloudflare Workers Static Assets:

```bash
# Build the production bundle
npm run build

# Deploy directly to Cloudflare
npx wrangler deploy
```

### Option B: Cloudflare Pages via GitHub
1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Initial commit: AURORA Song Guesser"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/aurora-song-guesser.git
   git push -u origin main
   ```
2. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**. Your game will be live globally on Cloudflare's CDN!

---

## 📜 Audio Disclaimer
This project is an open-source, non-profit fan tribute. Audio snippets are streamed from official 30-second preview endpoints (Apple Music / iTunes API). All rights to the songs and recordings belong to AURORA, Petroleum Records, Decca, and Universal Music Group.
