'use client';

import { sponsorsData } from '@/data/sponsors';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SponsorForm } from './SponsorForm';

export default function SponsorsSection({
  showSponsorsPage,
  showBecomeSponsor,
}: {
  showSponsorsPage: boolean;
  showBecomeSponsor: boolean;
}) {
  const sponsors = sponsorsData.filter(sponsor => sponsor.id == 'meta');
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
          Our Sponsors
        </h2>
        {showBecomeSponsor && !showForm && (
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-6">
              Join us in shaping the future of AI. Become a sponsor today!
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-block px-6 py-3 border border-yellow-500 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
            >
              Become a Sponsor
            </button>
          </div>
        )}
        {showForm && <SponsorForm />}
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
