import React from 'react';

interface MainHeadingProps {
  title: string;
  subtitle?: string;
}

export default function MainHeading({ title, subtitle }: MainHeadingProps) {
  return (
    <div className="relative max-w-7xl mx-auto mb-24">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-yellow-500/50 to-purple-500/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border border-yellow-500/50" />

      <h1 className="text-center text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
        {title}
      </h1>
      {subtitle && (
        <p className="text-center text-xl text-yellow-100/60 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
