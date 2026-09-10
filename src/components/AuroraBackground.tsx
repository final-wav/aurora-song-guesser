import React, { useState, useEffect } from 'react';

interface AuroraBackgroundProps {
  activeArtwork?: string;
  isPlaying?: boolean;
}

// Curated authentic AURORA album covers and photos
const AURORA_BACKDROPS = [
  'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/22/02/0f22026c-d2c6-4d0f-faa1-c0ef0be18bfe/24UMGIM27788.rgb.jpg/1200x1200bb.jpg', // What Happened To The Heart?
  'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/1200x1200bb.jpg', // All My Demons
  'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ff/e1/62/ffe16290-9d3d-d81e-9270-5bb31d7d3ebc/44003199699.jpg/1200x1200bb.jpg', // Infections Step 1
  'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cc/2d/69/cc2d69d3-61f2-1c69-159c-898bac81cc14/5056167113911.jpg/1200x1200bb.jpg', // Different Kind Step 2
  'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/17/ee/5e/17ee5e67-1dcd-beab-a5d4-4845f9dbacbf/5056167167433.jpg/1200x1200bb.jpg', // The Gods We Can Touch
  'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b1/9f/df/b19fdfbf-f497-17d6-9328-b1f38343f707/198391418907.jpg/1200x1200bb.jpg', // AURORA Portrait
  'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/66/cf/70/66cf7012-98ed-b201-21ed-b1ee0e9ad26f/19UM1IM00155.rgb.jpg/1200x1200bb.jpg', // Into The Unknown
  'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ad/c2/bf/adc2bf81-b51f-642a-2f4a-251f08cb3854/22UMGIM50532.rgb.jpg/1200x1200bb.jpg', // Cure For Me
];

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  activeArtwork,
}) => {
  const [bgImage, setBgImage] = useState<string>(() => {
    return activeArtwork || AURORA_BACKDROPS[Math.floor(Math.random() * AURORA_BACKDROPS.length)];
  });

  useEffect(() => {
    if (activeArtwork) {
      setBgImage(activeArtwork);
    }
  }, [activeArtwork]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#0c0c0f]">
      {/* Blurred Cover / Photo Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-125 filter blur-[90px] sm:blur-[120px] opacity-40"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark tint overlay for readability */}
      <div className="absolute inset-0 bg-[#0c0c0f]/60" />
    </div>
  );
};

