'use client';

import { sponsorsData } from '@/data/sponsors';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
        {showForm && <SponsorForm onSubmit={() => setShowForm(false)} />}
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

function SponsorForm({ onSubmit }: { onSubmit: () => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12">
      <div className="mb-4">
        <label htmlFor="orgName" className="block text-sm font-medium text-gray-300 mb-2">
          Organization Name
        </label>
        <input
          type="text"
          id="orgName"
          name="orgName"
          required
          placeholder="Enter your organization name"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          required
          placeholder="Enter your full name"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          How would you like to sponsor?
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Briefly describe your interest or ideas for sponsoring"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
        ></textarea>
        <p className="text-sm text-gray-400 mt-1">
          Let us know how you&apos;d like to support the conference (e.g., financial, in-kind, or
          other contributions).
        </p>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-yellow-500 text-black rounded-full text-base md:text-lg font-semibold hover:bg-yellow-600 transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
}
