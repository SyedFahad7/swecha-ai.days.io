import { sponsorsData } from '@/data/sponsors';
import Link from 'next/link';
import Image from 'next/image';
import MainHeading from '@/components/ui/MainHeading';

export default function SponsorsPage() {
  const platinumSponsors = sponsorsData.filter(s => s.tier === 'platinum');
  const silverSponsors = sponsorsData.filter(s => s.tier === 'silver');
  const associateSponsors = sponsorsData.filter(s => s.tier === 'associate');

  return (
    <main className="min-h-screen bg-black text-white">
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

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <MainHeading
          title="Our Sponsors"
          subtitle="Leading organizations shaping the future of AI technology and research"
        />

        {platinumSponsors.length > 0 && (
          <section className="max-w-7xl mx-auto mb-24">
            <h2 className="text-2xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
              Platinum Supporters
            </h2>
            <div className="grid grid-cols-1 gap-8 mt-12">
              {platinumSponsors.map(sponsor => (
                <Link
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg border border-yellow-900/30 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10 group-hover:from-purple-900/20 group-hover:to-yellow-900/20 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-purple-500/5 group-hover:from-yellow-500/10 group-hover:to-purple-500/10 transition-colors duration-500" />
                    <div className="relative p-8 flex flex-col md:flex-row items-center gap-8">
                      <div className="w-48 h-48 relative">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                          {sponsor.name}
                        </h3>
                        <p className="text-gray-400 text-lg mb-4">{sponsor.description}</p>
                        <span className="text-yellow-300/60 group-hover:text-yellow-300 transition-colors">
                          Visit Website →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {silverSponsors.length > 0 && (
          <section className="max-w-7xl mx-auto mb-24">
            <h2 className="text-2xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
              Silver Supporters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {silverSponsors.map(sponsor => (
                <Link
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 group-hover:from-gray-900/70 group-hover:to-gray-800/50 transition-colors duration-500 h-full">
                    <div className="relative p-6">
                      <div className="w-32 h-32 mx-auto mb-6 relative">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-400 text-center mb-4">{sponsor.description}</p>
                      <div className="text-center">
                        <span className="text-gray-400/60 group-hover:text-gray-300 transition-colors">
                          Visit Website →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {associateSponsors.length > 0 && (
          <section className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Associate Supporters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {associateSponsors.map(sponsor => (
                <Link
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg border border-purple-900/30 bg-gradient-to-br from-purple-900/10 to-purple-800/10 group-hover:from-purple-900/20 group-hover:to-purple-800/20 transition-colors duration-500 h-full">
                    <div className="relative p-6">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-purple-200">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-400 text-center text-sm mb-4">
                        {sponsor.description}
                      </p>
                      <div className="text-center">
                        <span className="text-purple-400/60 group-hover:text-purple-300 transition-colors text-sm">
                          Visit Website →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
