import React from 'react';

const agenda = {
  'Day 1 - February 15': [
    {
      time: '08:00 - 09:00',
      title: 'Registration & Breakfast',
      type: 'break',
    },
    {
      time: '09:00 - 10:00',
      title: 'Opening Keynote: The Future of AI in India',
      speaker: 'Dr. Sarah Chen',
      type: 'keynote',
      track: 'Main Stage',
    },
    {
      time: '10:15 - 11:15',
      title: 'Large Language Models: Beyond ChatGPT',
      speaker: 'Raj Patel',
      type: 'technical',
      track: 'Technical Track',
    },
    {
      time: '11:30 - 12:30',
      title: 'AI Ethics and Responsible Innovation',
      speaker: 'Dr. Maya Singh',
      type: 'panel',
      track: 'Business Track',
    },
    {
      time: '12:30 - 13:30',
      title: 'Lunch Break & Networking',
      type: 'break',
    },
    {
      time: '13:30 - 14:30',
      title: 'Building AI-First Products',
      speaker: 'Alex Kumar',
      type: 'workshop',
      track: 'Workshop Track',
    },
    {
      time: '14:45 - 15:45',
      title: 'AI in Healthcare: Indian Perspective',
      speaker: 'Dr. Priya Reddy',
      type: 'technical',
      track: 'Technical Track',
    },
    {
      time: '16:00 - 17:00',
      title: 'Startup Showcase: AI Innovation',
      type: 'panel',
      track: 'Business Track',
    },
  ],
  'Day 2 - February 16': [
    {
      time: '09:00 - 10:00',
      title: 'AI Infrastructure at Scale',
      speaker: 'Vikram Mehta',
      type: 'technical',
      track: 'Technical Track',
    },
    {
      time: '10:15 - 11:15',
      title: 'Computer Vision Breakthroughs',
      speaker: 'Dr. James Lee',
      type: 'technical',
      track: 'Technical Track',
    },
    {
      time: '11:30 - 12:30',
      title: 'AI Investment Landscape',
      type: 'panel',
      track: 'Business Track',
    },
    {
      time: '12:30 - 13:30',
      title: 'Lunch Break & Networking',
      type: 'break',
    },
    {
      time: '13:30 - 14:30',
      title: 'Hands-on MLOps Workshop',
      speaker: 'Sarah Williams',
      type: 'workshop',
      track: 'Workshop Track',
    },
    {
      time: '14:45 - 15:45',
      title: 'AI in Agriculture',
      speaker: 'Dr. Rajesh Kumar',
      type: 'technical',
      track: 'Technical Track',
    },
    {
      time: '16:00 - 17:00',
      title: 'Closing Keynote: AI\'s Impact on Society',
      speaker: 'Prof. Arun Sharma',
      type: 'keynote',
      track: 'Main Stage',
    },
  ],
};

const getSessionTypeStyles = (type: string) => {
  switch (type) {
    case 'keynote':
      return 'from-purple-500/20 to-yellow-500/20 border-purple-500/30';
    case 'technical':
      return 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30';
    case 'panel':
      return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
    case 'workshop':
      return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
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
          {Object.entries(agenda).map(([day, sessions], dayIndex) => (
            <div key={day} className="mb-20 last:mb-0">
              {/* Day Header */}
              <div className="relative mb-12">
                <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
                <h2 className="inline-block relative text-3xl font-bold bg-black px-4 -ml-4 text-yellow-300">
                  {day}
                </h2>
              </div>

              {/* Sessions */}
              <div className="space-y-6">
                {sessions.map((session, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Session card */}
                    <div className={`relative overflow-hidden rounded-lg border bg-gradient-to-br ${getSessionTypeStyles(session.type)}`}>
                      <div className="relative p-6">
                        {/* Time */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-yellow-300 font-mono">{session.time}</div>
                          {session.track && (
                            <>
                              <div className="w-px h-4 bg-yellow-500/30" />
                              <div className="text-yellow-300/60 text-sm">{session.track}</div>
                            </>
                          )}
                        </div>

                        {/* Title & Speaker */}
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-yellow-200 transition-colors">
                            {session.title}
                          </h3>
                          {session.speaker && (
                            <p className="text-yellow-100/60">
                              {session.speaker}
                            </p>
                          )}
                        </div>

                        {/* Type indicator */}
                        <div className="absolute top-6 right-6">
                          <div className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider border ${
                            session.type === 'break' ? 'border-gray-500/30 text-gray-400' :
                            session.type === 'keynote' ? 'border-purple-500/30 text-purple-300' :
                            session.type === 'technical' ? 'border-cyan-500/30 text-cyan-300' :
                            session.type === 'panel' ? 'border-yellow-500/30 text-yellow-300' :
                            'border-green-500/30 text-green-300'
                          }`}>
                            {session.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
