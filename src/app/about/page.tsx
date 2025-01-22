import { coreTeam } from '@/data/coreTeam';
import { advisors } from '@/data/advisors';
import { developers } from '@/data/developers';
import { management } from '@/data/management';
import Image from 'next/image';
import Link from 'next/link';
import MainHeading from '@/components/ui/MainHeading';

export default function AboutUs() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto my-16">
        <MainHeading title="About" className="text-4xl font-bold text-yellow-200" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about/conference.jpg"
              alt="AI Conference"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              AI Days 2025 is a premier artificial intelligence conference bringing together
              industry leaders, researchers, and innovators to explore the latest advancements in AI
              technology.
            </p>
            <p className="text-xl text-gray-300">
              AI Days aims to bring together experts and institutions from Industry, Academia,
              Startups and Government who work on a shared goal of people-centric AI. We envision
              the conference as the melting pot for breakthrough advancements in tech, policy, art
              and more avenues centred around responsible AI.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              In addition, this conference will help foster a better ecosystem for AI-based
              startups. We aim to conduct this as an annual conference.
            </p>
            <p className="text-xl text-gray-300">
              Join us for an immersive experience featuring keynote speakers, workshops, and
              networking opportunities that will shape the future of AI.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about/innovation.jpg"
              alt="AI Innovation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about/workshop.jpg"
              alt="AI Workshop"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-xl text-gray-300">
              Connect with industry leaders, learn from experts, and be part of the AI revolution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="relative h-[200px] rounded-2xl overflow-hidden">
            <Image src="/about/networking.jpg" alt="Networking" fill className="object-cover" />
          </div>
          <div className="relative h-[200px] rounded-2xl overflow-hidden">
            <Image src="/about/innovation.jpg" alt="Innovation" fill className="object-cover" />
          </div>
          <div className="relative h-[200px] rounded-2xl overflow-hidden">
            <Image src="/about/technology.jpg" alt="Technology" fill className="object-cover" />
          </div>
        </div>
      </section>

      <TeamSection title="Core Team" members={coreTeam} />
      <TeamSection title="Advisors" members={advisors} />
      <TeamSection title="Developers" members={developers} />
      <TeamSection title="Management" members={management} />
    </main>
  );
}

interface TeamSectionProps {
  title: string;
  members: Array<{
    image: string;
    name: string;
    role: string;
    linkedin?: string;
    twitter?: string;
  }>;
}

function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <section className="max-w-7xl mx-auto mb-24 py-16 bg-gradient-to-br from-purple-900/20 to-purple-900/5 rounded-2xl p-8 border border-purple-500/20">
      <h2 className="text-2xl font-bold text-yellow-200 text-center mb-16">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center px-4">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-purple-200 text-center mb-2">{member.name}</h3>
            <p className="text-gray-300 text-center mb-4">{member.role}</p>
            <div className="flex space-x-4 opacity-80 hover:opacity-100 transition-opacity">
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300/60 hover:text-yellow-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              )}
              {member.twitter && (
                <Link
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300/60 hover:text-yellow-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
