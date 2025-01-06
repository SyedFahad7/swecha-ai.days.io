import Link from 'next/link';
import { speakers } from '@/data/speakers';
import EventRegistrationButton from '@/components/EventRegistrationButton';
import SpeakerCard from '@/components/SpeakerCard';
import { isAgendaEnabled, isBecomeASponsorEnabled, isSponsorsPageEnabled } from '@/featureFlags';
import { sponsorsData } from '@/data/sponsors';
import Image from 'next/image';

export default async function Home() {
  const [showAgenda, showWorkshops, showSponsorsPage, showBecomeSponsor] = await Promise.all([
    isAgendaEnabled(),
    isAgendaEnabled(),
    isSponsorsPageEnabled(),
    isBecomeASponsorEnabled(),
  ]);
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
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-4 text-purple-300 font-medium tracking-wider">
            India&#39;s Largest AI Conference
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse">
            AI Days 2025
          </h1>
          <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl mb-8">
            <span className="text-purple-300">📆</span>
            <span className="text-cyan-300">15 - 16 February 2025</span>
          </div>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Shaping the Future of AI in India
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {[
              { number: '02', label: 'Days' },
              { number: '60+', label: 'Speakers' },
              { number: '2000+', label: 'Delegates' },
              { number: '20+', label: 'Workshops' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <EventRegistrationButton className="px-6 py-3 border border-purple-500 rounded-full text-base md:text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300" />
            <button className="px-6 py-3 border border-purple-500 rounded-full text-base md:text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Featured Speakers Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Our Speakers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.slice(0, 3).map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} hideDescription={true} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/speakers"
              className="inline-block px-6 py-3 border border-yellow-500 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
            >
              View All Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Agenda Highlights Section */}
      {showAgenda && (
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
              Agenda Highlights
            </h2>
            {/* Add condensed agenda items here */}
            <div className="text-center mt-12">
              <Link
                href="/agenda"
                className="inline-block px-6 py-3 border border-yellow-500 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
              >
                View Full Agenda
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Workshops Preview Section */}
      {showWorkshops && (
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
              Workshops
            </h2>
            {/* Add condensed workshop previews here */}
            <div className="text-center mt-12">
              <Link
                href="/workshops"
                className="inline-block px-6 py-3 border border-yellow-500 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
              >
                Explore Workshops
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Sponsors Section */}
      <SponsorsSection showSponsorsPage={showSponsorsPage} showBecomeSponsor={showBecomeSponsor} />
    </main>
  );
}

function SponsorsSection({
  showSponsorsPage,
  showBecomeSponsor,
}: {
  showSponsorsPage: boolean;
  showBecomeSponsor: boolean;
}) {
  const sponsors = sponsorsData.filter(sponsor => sponsor.id == 'meta');
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
          Our Sponsors
        </h2>
        {showBecomeSponsor && (
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-6">
              Join us in shaping the future of AI. Become a sponsor today!
            </p>
            <Link
              href="/sponsor-us"
              className="inline-block px-6 py-3 border border-yellow-500 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
            >
              Become a Sponsor
            </Link>
          </div>
        )}
        <div className="flex justify-center items-center mb-12">
          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="mx-4">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        {showSponsorsPage && (
          <div className="text-center mt-12">
            <Link
              href="/sponsors"
              className="inline-block px-6 py-3 border border-yellow-500 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
            >
              View All Sponsors
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
