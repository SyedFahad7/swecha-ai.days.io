import Link from 'next/link';
import { workshopsData } from '@/data/workshops';
import Image from 'next/image';

export default function WorkshopsPage() {
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
            AI Temperament Workshops
          </h1>
          <p className="text-center text-xl text-yellow-100/60 max-w-3xl mx-auto">
            Hands-on sessions to shape the future of AI personality and behavior
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshopsData.map(workshop => (
            <Link
              key={workshop.id}
              href={`/workshops/${workshop.id}`}
              className="group relative block"
            >
              {/* Workshop Card */}
              <div className="relative overflow-hidden rounded-lg border border-yellow-900/30">
                {/* Background with animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10 group-hover:from-purple-900/20 group-hover:to-yellow-900/20 transition-colors duration-500" />

                {/* Decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-yellow-500/30 text-yellow-300 mb-4">
                    {workshop.category}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{workshop.description}</p>
                  </div>

                  {/* Workshop Details */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-yellow-900/30">
                    <div>
                      <div className="text-yellow-300/60 text-sm mb-1">Duration</div>
                      <div className="text-yellow-100">{workshop.duration}</div>
                    </div>
                    <div>
                      <div className="text-yellow-300/60 text-sm mb-1">Level</div>
                      <div className="text-yellow-100">{workshop.level}</div>
                    </div>
                  </div>

                  {/* Topics Preview */}
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-3">Topics</div>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs bg-yellow-900/20 text-yellow-300/80 border border-yellow-900/30"
                        >
                          {topic}
                        </span>
                      ))}
                      {workshop.topics.length > 3 && (
                        <span className="px-3 py-1 rounded-full text-xs bg-yellow-900/20 text-yellow-300/80 border border-yellow-900/30">
                          +{workshop.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Instructor Preview */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative bg-gradient-to-br from-purple-900/50 to-yellow-900/50">
                      <Image
                        src={workshop.instructor.image}
                        alt={workshop.instructor.name}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-yellow-200">{workshop.instructor.name}</div>
                      <div className="text-sm text-yellow-100/60">{workshop.instructor.role}</div>
                    </div>
                  </div>

                  {/* View Details */}
                  <div className="md:absolute md:bottom-6 md:right-6 mt-4 md:mt-0">
                    <span className="text-sm text-yellow-300/60 group-hover:text-yellow-300 transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
