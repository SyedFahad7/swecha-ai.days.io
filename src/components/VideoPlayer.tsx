'use client';

import React, { useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video">
      {isPlaying ? (
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <div
          className="w-full h-full bg-cover bg-center rounded-lg cursor-pointer relative"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
          }}
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
