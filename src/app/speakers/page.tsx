import { speakers } from '@/data/speakers';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Decorative lines */}
          <div className="absolute inset-0 grid grid-cols-3 -z-10">
            <div className="border-l border-yellow-900/20 h-full" />
            <div className="border-l border-yellow-900/20 h-full" />
            <div className="border-l border-yellow-900/20 h-full" />
            <div className="border-l border-yellow-900/20 h-full" />
          </div>

          {speakers.map((speaker, index) => (
            <div key={index} className="group relative">
              {/* Card Background with grain texture */}
              <div className="absolute inset-0 bg-[#0A0A0A] border border-yellow-900/30 rounded-lg overflow-hidden">
                <div className="absolute inset-0 opacity-50 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Top decorative element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

                {/* Speaker Image */}
                <div className="mb-8 relative">
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-yellow-500/10" />
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Image border effects */}
                  <div className="absolute inset-0 border border-yellow-500/20 rounded-lg" />
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-yellow-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                </div>

                {/* Speaker Info */}
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                    {speaker.name}
                  </h3>
                  <p className="text-purple-300/80 font-medium">{speaker.role}</p>
                  <p className="text-yellow-100/60 text-sm">{speaker.topic}</p>
                  <p className="text-gray-400/80 text-sm leading-relaxed">{speaker.bio}</p>

                  {/* Social Links */}
                  <div className="pt-6 flex gap-4">
                    <Link
                      href={speaker.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500/50 hover:text-yellow-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                    <Link
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500/50 hover:text-yellow-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
