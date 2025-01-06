import { speakers } from '@/data/speakers';
import SpeakerCard from '@/components/SpeakerCard';

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-rows-[repeat(auto-fit,minmax(50px,1fr))] opacity-10">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#2A2A2A] relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-900/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Header with decorative elements */}
        <div className="relative max-w-7xl mx-auto mb-24">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-yellow-500/50 to-purple-500/50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border border-yellow-500/50" />

          <h1 className="text-center text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Our Speakers
          </h1>
          <p className="text-center text-xl text-yellow-100/60 max-w-3xl mx-auto">
            Meet the industry leaders and innovators who will shape the future of AI
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Decorative lines */}
          <div className="absolute inset-0 grid grid-cols-3 -z-10">
            <div className="border-l border-yellow-900/20 h-full" />
            <div className="border-l border-yellow-900/20 h-full" />
            <div className="border-l border-yellow-900/20 h-full" />
            <div className="border-l border-yellow-900/20 h-full" />
          </div>

          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </main>
  );
}
