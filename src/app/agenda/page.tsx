import React from 'react';
import Link from 'next/link';
import { agendaData } from '@/data/agenda';

const getSessionTypeStyles = (type: string) => {
  switch (type) {
    case 'keynote':
      return 'from-purple-500/20 to-yellow-500/20 border-purple-500/30';
    case 'panel':
      return 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30';
    case 'workshop':
      return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
    case 'talk':
      return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
    case 'entertainment':
      return 'from-pink-500/20 to-rose-500/20 border-pink-500/30';
    case 'opening':
      return 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30';
    case 'networking':
      return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    default:
      return 'from-gray-500/20 to-gray-400/20 border-gray-500/30';
  }
};

export default function AgendaPage() {
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
          Conference Agenda
        </h1>
        <p className="text-2xl text-yellow-100/60 mb-12 text-center max-w-2xl">
          Our exciting agenda is being finalized. Check back soon for a full schedule of inspiring
          talks, workshops, and networking opportunities!
        </p>
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-yellow-500/20 h-3 w-3"></div>
          <div className="rounded-full bg-yellow-500/20 h-3 w-3"></div>
          <div className="rounded-full bg-yellow-500/20 h-3 w-3"></div>
        </div>
      </div>
    </main>
  );
}

(function AgendaPageActual() {
  // export as default it when agenda is ready
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
        {/* Header */}
        <div className="relative max-w-7xl mx-auto mb-24">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-yellow-500/50 to-purple-500/50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border border-yellow-500/50" />

          <h1 className="text-center text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Conference Agenda
          </h1>
          <p className="text-center text-xl text-yellow-100/60 max-w-3xl mx-auto">
            Two days of inspiring talks, workshops, and networking
          </p>
        </div>

        {/* Schedule */}
        <div className="max-w-7xl mx-auto">
          {agendaData.map(day => (
            <div key={day.date} className="mb-20 last:mb-0">
              {/* Day Header */}
              <div className="relative mb-12">
                <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
                <h2 className="inline-block relative text-3xl font-bold bg-black px-4 -ml-4 text-yellow-300">
                  {day.date}
                </h2>
              </div>

              {/* Sessions */}
              <div className="space-y-6">
                {day.events.map(event => (
                  <div key={event.id} className="group relative">
                    {event.type === 'break' ? (
                      // Break session (no details page)
                      <div
                        className={`relative overflow-hidden rounded-lg border bg-gradient-to-br ${getSessionTypeStyles(event.type)}`}
                      >
                        <div className="relative p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-yellow-300 font-mono">{event.time}</div>
                            <div className="text-yellow-300/60 text-sm">{event.location}</div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                          <p className="text-gray-400">{event.description}</p>
                        </div>
                      </div>
                    ) : (
                      // Interactive session with details page
                      <Link href={`/agenda/${event.id}`} className="block">
                        <div
                          className={`relative overflow-hidden rounded-lg border bg-gradient-to-br ${getSessionTypeStyles(event.type)} group-hover:border-yellow-500/50 transition-colors`}
                        >
                          <div className="relative p-6">
                            {/* Time and Track */}
                            <div className="flex items-center gap-4 mb-4">
                              <div className="text-yellow-300 font-mono">{event.time}</div>
                              {event.track && (
                                <>
                                  <div className="w-px h-4 bg-yellow-500/30" />
                                  <div className="text-yellow-300/60 text-sm">{event.track}</div>
                                </>
                              )}
                              <div className="w-px h-4 bg-yellow-500/30" />
                              <div className="text-yellow-300/60 text-sm">{event.location}</div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold text-white group-hover:text-yellow-200 transition-colors mb-2">
                              {event.title}
                            </h3>
                            <p className="text-gray-400 mb-4 md:mb-0">{event.description}</p>

                            {/* Session Type Badge */}
                            <div className="md:absolute md:top-6 md:right-6 mb-2 md:mb-0">
                              <div
                                className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider border ${
                                  event.type === 'keynote'
                                    ? 'border-purple-500/30 text-purple-300'
                                    : event.type === 'panel'
                                      ? 'border-cyan-500/30 text-cyan-300'
                                      : event.type === 'workshop'
                                        ? 'border-green-500/30 text-green-300'
                                        : event.type === 'talk'
                                          ? 'border-yellow-500/30 text-yellow-300'
                                          : event.type === 'entertainment'
                                            ? 'border-pink-500/30 text-pink-300'
                                            : event.type === 'opening'
                                              ? 'border-indigo-500/30 text-indigo-300'
                                              : 'border-blue-500/30 text-blue-300'
                                }`}
                              >
                                {event.type}
                              </div>
                            </div>

                            {/* View Details Indicator */}
                            <div className="md:absolute md:bottom-6 md:right-6">
                              <span className="text-sm text-yellow-300/60 group-hover:text-yellow-300 transition-colors">
                                View Details →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
})();
