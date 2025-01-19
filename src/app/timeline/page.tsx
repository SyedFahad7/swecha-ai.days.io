'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/timeline';
import MainHeading from '@/components/ui/MainHeading';

const TimelinePage = () => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const filteredEvents =
    filter === 'all' ? timelineEvents : timelineEvents.filter(event => event.category === filter);

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
        <div className="max-w-7xl mx-auto">
          <MainHeading
            title="Our Journey"
            subtitle="Join us on our journey to revolutionize the future of AI"
          />
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'milestone', 'partnership', 'theme', 'launch'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full capitalize ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-blue-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Roadmap Timeline */}
          <div className="relative">
            {/* Connecting Line with curved sections */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
              <div
                className={`w-1 h-full transition-all duration-300 ${
                  hoveredEvent
                    ? 'bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-purple-500/30'
                    : 'bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500'
                }`}
              />
            </div>

            {/* Timeline Events */}
            <div className="space-y-16">
              {filteredEvents.map((event, index) => {
                const eventKey = `${event.year}-${event.title}`;
                const isHovered = hoveredEvent === eventKey;
                const isDimmed = hoveredEvent && !isHovered;

                return (
                  <motion.div
                    key={eventKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isDimmed ? 0.3 : 1, y: 0 }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.3,
                    }}
                    onMouseEnter={() => setHoveredEvent(eventKey)}
                    onMouseLeave={() => setHoveredEvent(null)}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } gap-8 relative group`}
                  >
                    {/* Event Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div
                        className={`relative p-6 rounded-[2rem] shadow-lg transition-all duration-300 overflow-hidden
                        ${
                          isHovered
                            ? 'transform scale-105 shadow-2xl border-2 border-transparent'
                            : 'bg-gray-800 border-gray-700 border hover:border-blue-500/50'
                        }`}
                        style={{
                          background: 'rgb(31, 41, 55)',
                        }}
                      >
                        {/* Gradient Border Background */}
                        {isHovered && (
                          <>
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600" />
                            <div className="absolute inset-[2px] rounded-[calc(2rem-2px)] bg-gray-800" />
                          </>
                        )}

                        <div className="relative">
                          <span
                            className={`text-sm font-semibold transition-colors duration-300 ${
                              isHovered ? 'text-blue-300' : 'text-blue-500'
                            }`}
                          >
                            {event.year}
                          </span>
                          <h2 className="text-2xl font-bold mt-2 flex items-center gap-2">
                            {index % 2 === 0 ? (
                              <>
                                {event.title} {event.icon}
                              </>
                            ) : (
                              <>
                                {event.icon} {event.title}
                              </>
                            )}
                          </h2>
                          <p
                            className={`mt-2 transition-colors duration-300 ${
                              isHovered ? 'text-gray-100' : 'text-gray-400'
                            }`}
                          >
                            {event.description}
                          </p>
                          <span
                            className={`inline-block mt-3 px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                              isHovered
                                ? 'bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white font-medium shadow-lg'
                                : 'bg-gray-700 text-gray-300'
                            } capitalize`}
                          >
                            {event.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Center Point with curved connectors */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
                          isHovered
                            ? 'bg-blue-400 border-purple-500 scale-125 shadow-lg shadow-purple-500/20'
                            : 'bg-blue-500 border-purple-600'
                        }`}
                      />
                    </div>

                    {/* Empty space for the other side */}
                    <div className="w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TimelinePage;
