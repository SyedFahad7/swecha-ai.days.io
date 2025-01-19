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
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold my-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
              Workshops
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our hands-on workshops to learn new skills, collaborate with peers, and get
              practical experience with cutting-edge technologies.
            </p>
          </div>

          {/* Workshop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshopsData.map(workshop => (
              <Link
                key={workshop.id}
                href={`/workshops/${workshop.id}`}
                className="group block h-[500px]"
              >
                {/* Workshop Card */}
                <div className="relative h-full overflow-hidden rounded-lg border border-yellow-900/30 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10 group-hover:from-purple-900/20 group-hover:to-yellow-900/20 transition-colors duration-500">
                  {/* Content */}
                  <div className="flex flex-col h-full p-8">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-6">
                      {workshop.level && (
                        <div className="px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-yellow-500/30 text-yellow-300">
                          {workshop.level}
                        </div>
                      )}
                      {workshop.category && (
                        <div className="px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-purple-500/30 text-purple-300">
                          {workshop.category}
                        </div>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div className="mb-6 flex-grow">
                      {workshop.title && (
                        <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                          {workshop.title}
                        </h3>
                      )}
                      {workshop.description && (
                        <p className="text-gray-400 leading-relaxed line-clamp-3">
                          {workshop.description}
                        </p>
                      )}
                    </div>

                    {/* Topics */}
                    {workshop.topics && workshop.topics.length > 0 && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {workshop.topics.slice(0, 3).map((topic, index) => (
                            <span
                              key={index}
                              className="px-2.5 py-1 rounded-full text-xs border border-purple-500/30 text-purple-300 bg-purple-900/10"
                            >
                              {topic}
                            </span>
                          ))}
                          {workshop.topics.length > 3 && (
                            <span className="px-2.5 py-1 rounded-full text-xs border border-purple-500/30 text-purple-300 bg-purple-900/10">
                              +{workshop.topics.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Workshop Details */}
                    {(workshop.duration || workshop.location) && (
                      <div className="grid grid-cols-2 gap-4 py-4 border-t border-yellow-900/30">
                        {workshop.duration && (
                          <div>
                            <div className="text-yellow-300/60 text-sm mb-1">Duration</div>
                            <div className="text-yellow-100">{workshop.duration}</div>
                          </div>
                        )}
                        {workshop.location && (
                          <div>
                            <div className="text-yellow-300/60 text-sm mb-1">Location</div>
                            <div className="text-yellow-100">{workshop.location}</div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Instructor */}
                    {workshop.instructor && (
                      <div className="flex items-center gap-3 pt-4 mt-auto border-t border-yellow-900/30">
                        {workshop.instructor.image && (
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                            <Image
                              src={workshop.instructor.image}
                              alt={workshop.instructor.name || 'Instructor'}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-grow">
                          {workshop.instructor.name && (
                            <div className="text-sm font-medium text-yellow-200">
                              {workshop.instructor.name}
                            </div>
                          )}
                          {workshop.instructor.role && (
                            <div className="text-sm text-yellow-200/60">
                              {workshop.instructor.role}
                            </div>
                          )}
                        </div>
                        <div className="text-sm text-yellow-300 font-medium flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                          View Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
