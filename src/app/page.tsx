import Link from 'next/link';
import EventRegistrationButton from '@/components/EventRegistrationButton';
import { isAgendaEnabled, isBecomeASponsorEnabled, isSponsorsPageEnabled } from '@/featureFlags';
import SponsorsSection from './_home_components/SponsorsSection';
import SpeakersCarousel from './_home_components/SpeakersCarousel';
import TicketsSection from './_home_components/TicketsSection';
import { config } from '@/config';
import dynamic from 'next/dynamic';

const CountdownTimer = dynamic(() => import('@/components/CountdownTimer'), { ssr: true });

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const [showAgenda, showWorkshops, showSponsorsPage, showBecomeSponsor] = await Promise.all([
    isAgendaEnabled(),
    isAgendaEnabled(),
    isSponsorsPageEnabled(),
    isBecomeASponsorEnabled(),
  ]);

  const conferenceDates = config.CONFERENCE_DAYS.datesLabel;
  const displayInterestForm = (await searchParams)['display-interest-form'] === '1';
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
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block px-6 py-2 mb-6 rounded-full border-2 border-yellow-500 text-yellow-500 text-lg md:text-xl font-semibold hover:bg-yellow-500/10 transition-all duration-300">
            {conferenceDates}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Shaping the Future of AI in India
          </h1>
          <p className="text-lg md:text-xl mb-4 text-purple-300 font-medium tracking-wider">
            India&#39;s Largest AI Conference
          </p>
          <Link
            href="https://2024.aidays.io"
            target="_blank"
            className="px-6 py-3 text-base font-medium text-purple-300 hover:text-purple-200 transition-all duration-300 flex items-center justify-center"
          >
            View 2024 Highlights
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 py-3">
            {[
              { number: '02', label: 'Days' },
              { number: '60+', label: 'Speakers' },
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
            <EventRegistrationButton
              className="px-6 py-3 border block border-purple-500 rounded-full text-base md:text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
              openInterestFromByDefault={displayInterestForm}
            />
          </div>
        </div>
      </div>

      {/* Featured Speakers Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Our Speakers
          </h2>
          <div className="relative overflow-hidden">
            <SpeakersCarousel />
          </div>
          <div className="text-center mt-12 relative z-10">
            <Link
              href="/speakers"
              className="inline-block px-6 py-3 border border-yellow-500 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300 group"
            >
              <span className="relative z-10">View All Speakers</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-yellow-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <TicketsSection />

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
      <div className="relative z-10">
        <CountdownTimer />
      </div>
    </main>
  );
}
