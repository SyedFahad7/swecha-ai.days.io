import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { workshopsData } from '@/data/workshops';

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
    default:
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-11v6h-2v-6H9l3-4 3 4h-2z" />
        </svg>
      );
  }
}

export default function WorkshopDetailPage({ params }: { params: { id: string } }) {
  const workshop = workshopsData.find(w => w.id === params.id);

  if (!workshop) {
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
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/workshops"
            className="inline-flex items-center text-yellow-300/60 hover:text-yellow-300 transition-colors mb-8"
          >
            ← Back to Workshops
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Workshop Header */}
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-yellow-500/30 text-yellow-300 mb-6">
                  {workshop.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
                  {workshop.title}
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {workshop.description}
                </p>
              </div>

              {/* Instructor */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-yellow-300">Workshop Instructor</h2>
                <div className="bg-gradient-to-br from-purple-900/20 to-yellow-900/20 border border-yellow-900/30 rounded-lg p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <Image
                        src={workshop.instructor.image}
                        alt={workshop.instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-200 mb-2">{workshop.instructor.name}</h3>
                      <p className="text-yellow-100/60 mb-4">{workshop.instructor.role} at {workshop.instructor.organization}</p>
                      <p className="text-gray-400 mb-4">{workshop.instructor.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {workshop.instructor.expertise.map((exp, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-xs bg-yellow-900/20 text-yellow-300 border border-yellow-900/30"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {workshop.instructor.socialLinks.map((link, index) => (
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
              </div>

              {/* Detailed Description */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-yellow-300">About This Workshop</h2>
                <div className="prose prose-invert max-w-none">
                  {workshop.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-yellow-300">What You'll Learn</h2>
                <div className="grid gap-4">
                  {workshop.learningOutcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-purple-900/10 to-yellow-900/10 border border-yellow-900/30"
                    >
                      <div className="w-6 h-6 rounded-full bg-yellow-900/20 border border-yellow-900/30 flex items-center justify-center text-yellow-300 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-300">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-yellow-300">Topics Covered</h2>
                <div className="flex flex-wrap gap-3">
                  {workshop.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-full bg-purple-900/20 text-purple-300 border border-purple-900/30"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Workshop Details Card */}
              <div className="bg-gradient-to-br from-purple-900/20 to-yellow-900/20 border border-yellow-900/30 rounded-lg p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-1">Date & Time</div>
                    <div className="text-yellow-200">{workshop.date}</div>
                    <div className="text-yellow-200">{workshop.time}</div>
                  </div>
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-1">Duration</div>
                    <div className="text-yellow-200">{workshop.duration}</div>
                  </div>
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-1">Location</div>
                    <div className="text-yellow-200">{workshop.location}</div>
                  </div>
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-1">Level</div>
                    <div className="text-yellow-200">{workshop.level}</div>
                  </div>
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-1">Capacity</div>
                    <div className="text-yellow-200">{workshop.capacity} participants</div>
                  </div>
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-1">Price</div>
                    <div className="text-2xl font-bold text-yellow-200">{workshop.price}</div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-lg text-white font-semibold hover:from-purple-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-yellow-500/25">
                  Register Now
                </button>
              </div>

              {/* Prerequisites */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-300">Prerequisites</h3>
                <ul className="space-y-2">
                  {workshop.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Included */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-300">What's Included</h3>
                <ul className="space-y-2">
                  {workshop.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-300">Materials Provided</h3>
                <ul className="space-y-2">
                  {workshop.materials.map((material, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
