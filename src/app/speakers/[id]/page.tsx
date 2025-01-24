import { speakerById } from '@/data/speakers';
import Image from 'next/image';
import Link from 'next/link';
import VideoPlayer from '@/components/VideoPlayer';

export default async function SpeakerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const speaker = speakerById[id];

  if (!speaker) {
    return (
      <div className="bg-black text-white flex items-center justify-center">
        <p className="text-2xl text-yellow-500">Speaker not found</p>
      </div>
    );
  }

  return (
    <main className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-yellow-900/20 animate-gradient-xy" />
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-500/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container pt-32 pb-20 mx-auto">
        <Link
          href="/speakers"
          className="text-yellow-500 px-2 hover:text-yellow-400 mb-12 inline-flex items-center group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Speakers
        </Link>

        <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
          <div className="mb-8 md:mb-0 md:mr-12 relative w-64 h-64 flex-shrink-0">
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover rounded-full"
            />
            <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-full animate-pulse" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
              {speaker.name}
            </h1>
            <p className="text-xl text-purple-300/80 mb-2">{speaker.role}</p>
            <p className="text-lg text-yellow-100/60 mb-8">{speaker.topic}</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {speaker.social.twitter && (
                <Link
                  href={speaker.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              )}
              {speaker.social.linkedin && (
                <Link
                  href={speaker.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>

        {speaker.bio && (
          <div className="mb-12 bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">About {speaker.name}</h2>
            <p className="text-gray-300 leading-relaxed">{speaker.bio}</p>
          </div>
        )}

        {speaker.videoId && (
          <div className="mb-12 bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
              Hear from {speaker.name}
            </h2>
            <VideoPlayer videoId={speaker.videoId} />
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/register"
            className="inline-block px-8 py-4 border-2 border-yellow-500 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </div>
    </main>
  );
}
