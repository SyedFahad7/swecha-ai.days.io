import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { agendaData } from '@/data/agenda';
import { Event } from '@/types/events';

function findEventById(id: string): Event | undefined {
  for (const day of agendaData) {
    const event = day.events.find(e => e.id === id);
    if (event) return event;
  }
  return undefined;
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case 'twitter':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-11v6h-2v-6H9l3-4 3 4h-2z" />
        </svg>
      );
  }
}
type paramsType = Promise<{ id: string }>;

export default async function EventPage(props: { params: paramsType }) {
  const { id } = await props.params;
  const event = findEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid */}
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
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/agenda"
            className="inline-flex items-center text-yellow-300/60 hover:text-yellow-300 transition-colors mb-8"
          >
            ← Back to Agenda
          </Link>

          {/* Event Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-yellow-300 font-mono">{event.time}</div>
              {event.track && (
                <>
                  <div className="w-px h-4 bg-yellow-500/30" />
                  <div className="text-yellow-300/60">{event.track}</div>
                </>
              )}
              <div className="w-px h-4 bg-yellow-500/30" />
              <div className="text-yellow-300/60">{event.location}</div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
              {event.title}
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">{event.description}</p>
          </div>

          {/* Event Details */}
          {event.type === 'keynote' && (
            <div className="space-y-8">
              {/* Speaker Profile */}
              <div className="bg-gradient-to-br from-purple-900/20 to-yellow-900/20 border border-yellow-900/30 rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={event.speaker.image}
                      alt={event.speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-200 mb-2">
                      {event.speaker.name}
                    </h3>
                    <p className="text-yellow-100/60 mb-4">
                      {event.speaker.role} at {event.speaker.organization}
                    </p>
                    <p className="text-gray-400 mb-4">{event.speaker.bio}</p>
                    <div className="flex gap-4">
                      {event.speaker.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-300/60 hover:text-yellow-300 transition-colors"
                        >
                          <SocialIcon platform={link.platform} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-yellow-300">Abstract</h2>
                <p className="text-gray-400 leading-relaxed">{event.abstract}</p>
              </div>
            </div>
          )}

          {event.type === 'panel' && (
            <div className="space-y-8">
              {/* Moderator */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-yellow-300">Moderator</h2>
                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-900/30 rounded-lg p-6">
                  <div className="flex items-start gap-6">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={event.moderator.image}
                        alt={event.moderator.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-200 mb-2">
                        {event.moderator.name}
                      </h3>
                      <p className="text-cyan-100/60 mb-2">
                        {event.moderator.role} at {event.moderator.organization}
                      </p>
                      <p className="text-gray-400">{event.moderator.bio}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panelists */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-yellow-300">Panelists</h2>
                <div className="grid gap-6">
                  {event.panelists.map((panelist, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-900/30 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-6">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                          <Image
                            src={panelist.image}
                            alt={panelist.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-cyan-200 mb-2">{panelist.name}</h3>
                          <p className="text-cyan-100/60 mb-2">
                            {panelist.role} at {panelist.organization}
                          </p>
                          <p className="text-gray-400 mb-2">{panelist.bio}</p>
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs border border-cyan-500/30 text-cyan-300">
                            {panelist.expertise}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discussion Topics */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-yellow-300">Discussion Topics</h2>
                <div className="flex flex-wrap gap-2">
                  {event.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-full bg-cyan-900/20 text-cyan-300 border border-cyan-900/30"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {event.type === 'workshop' && (
            <div className="space-y-8">
              {/* Workshop Details */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-yellow-300/60">Duration</div>
                  <div className="text-xl text-yellow-200">{event.details.duration}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-yellow-300/60">Capacity</div>
                  <div className="text-xl text-yellow-200">
                    {event.details.capacity} participants
                  </div>
                </div>
              </div>

              {/* Organizer */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-yellow-300">Workshop Lead</h2>
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-900/30 rounded-lg p-6">
                  <div className="flex items-start gap-6">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <Image
                        src={event.details.organizer.image}
                        alt={event.details.organizer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-200 mb-2">
                        {event.details.organizer.name}
                      </h3>
                      <p className="text-green-100/60 mb-4">
                        {event.details.organizer.role} at {event.details.organizer.organization}
                      </p>
                      <p className="text-gray-400">{event.details.organizer.bio}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-yellow-300">Requirements</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {event.details.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* What You'll Learn */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-yellow-300">What You&#39;ll Learn</h2>
                <div className="flex flex-wrap gap-2">
                  {event.details.takeaways.map((takeaway, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-full bg-green-900/20 text-green-300 border border-green-900/30"
                    >
                      {takeaway}
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-yellow-300">Materials Provided</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {event.details.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Register Button */}
          <div className="mt-12">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-lg text-white text-lg font-semibold hover:from-purple-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-yellow-500/25">
              Register for this {event.type}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
