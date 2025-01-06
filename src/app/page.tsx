import Link from 'next/link';
import Image from 'next/image';
import { speakers } from '@/data/speakers';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-rows-[repeat(auto-fit,minmax(50px,1fr))] opacity-10">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#2A2A2A] relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-900/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-lg md:text-xl mb-4 text-purple-300 font-medium tracking-wider">
            India&#39;s Largest AI Conference
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse">
            AI Days 2025
          </h1>
          <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl mb-8">
            <span className="text-purple-300">📆</span>
            <span className="text-cyan-300">15 - 16 February 2025</span>
          </div>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Shaping the Future of AI in India
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { number: '02', label: 'Days' },
              { number: '60+', label: 'Speakers' },
              { number: '2000+', label: 'Delegates' },
              { number: '20+', label: 'Workshops' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
            <button className="md:px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25">
              Registrations Opening Soon
            </button>
            <button className="px-8 py-4 border border-purple-500 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Featured Speakers Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Featured Speakers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-[#0A0A0A] border border-yellow-900/30 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 opacity-50 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10" />
                </div>
                <div className="relative p-8">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
                  <div className="mb-8 relative">
                    <div className="aspect-square overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-yellow-500/10" />
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={400}
                        height={400}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 border border-yellow-500/20 rounded-lg" />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-yellow-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  </div>
                  <div className="relative space-y-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                      {speaker.name}
                    </h3>
                    <p className="text-purple-300/80 font-medium">{speaker.role}</p>
                    <p className="text-yellow-100/60 text-sm">{speaker.topic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/speakers"
              className="inline-block px-8 py-3 border border-yellow-500 rounded-full text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
            >
              View All Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Agenda Highlights Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Agenda Highlights
          </h2>
          {/* Add agenda items here */}
          <div className="text-center mt-12">
            <Link
              href="/agenda"
              className="inline-block px-8 py-3 border border-yellow-500 rounded-full text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
            >
              View Full Agenda
            </Link>
          </div>
        </div>
      </section>

      {/* Workshops Preview Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Workshops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add workshop previews here */}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/workshops"
              className="inline-block px-8 py-3 border border-yellow-500 rounded-full text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
            >
              Explore Workshops
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Our Sponsors
          </h2>
          {/* Add sponsor logos here */}
          <div className="text-center mt-12">
            <Link
              href="/sponsors"
              className="inline-block px-8 py-3 border border-yellow-500 rounded-full text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
            >
              View All Sponsors
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
