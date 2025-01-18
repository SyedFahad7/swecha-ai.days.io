import { notFound } from 'next/navigation';
import Link from 'next/link';
// import Image from 'next/image';
import { workshopsData } from '@/data/workshops';

// function SocialIcon({ platform }: { platform: string }) {
//   switch (platform) {
//     case 'twitter':
//       return (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//         </svg>
//       );
//     case 'linkedin':
//       return (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//         </svg>
//       );
//     default:
//       return (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-11v6h-2v-6H9l3-4 3 4h-2z" />
//         </svg>
//       );
//   }
// }

type paramsType = Promise<{ id: string }>;

export default async function WorkshopDetailPage(props: { params: paramsType }) {
  const params = await props.params;
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

          <div className="space-y-12">
            {/* Workshop Header */}
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-4xl mx-auto">
                {/* Workshop Header */}
                <div className="mb-12">
                  {/* Level and Category Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {workshop.level && (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-900/10 border border-yellow-500/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-yellow-200 font-medium">{workshop.level}</span>
                      </div>
                    )}
                    {workshop.category && (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-900/10 border border-purple-500/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-purple-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                            clipRule="evenodd"
                          />
                          <path d="M14.25 8.625c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v8.625a3.375 3.375 0 11-6.75 0v-3.75a1.125 1.125 0 00-1.125-1.125h-1.5v-3.75z" />
                        </svg>
                        <span className="text-purple-200 font-medium">{workshop.category}</span>
                      </div>
                    )}
                  </div>
                  <h1 className="text-4xl font-bold text-yellow-200 mb-4">{workshop.title}</h1>
                  <p className="text-xl text-gray-300">{workshop.description}</p>
                </div>

                {/* Workshop Content */}
                <div className="space-y-12">
                  {/* What to Expect Section */}
                  <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 rounded-2xl p-8 border border-purple-500/20">
                    <h2 className="text-2xl font-bold text-yellow-200 mb-6 flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-purple-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                      What to Expect
                    </h2>
                    <div className="grid gap-4">
                      {workshop.longDescription
                        ?.split('Why Should You Attend?')[0]
                        .replace('What to Expect:', '')
                        .trim()
                        .split('\n')
                        .filter(item => item.trim())
                        .map((item, index) => {
                          const [title, description] = item.replace('- ', '').split(': ');
                          return (
                            <div
                              key={index}
                              className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/10 border border-purple-500/20"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-5 h-5 text-purple-300"
                                >
                                  <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" />
                                </svg>
                              </div>
                              <div>
                                <h3 className="font-semibold text-purple-200 mb-1">{title}</h3>
                                <p className="text-gray-300">{description}</p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {/* Why Should You Attend Section */}
                  <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-2xl p-8 border border-yellow-500/20">
                    <h2 className="text-2xl font-bold text-yellow-200 mb-6 flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Why Should You Attend?
                    </h2>
                    <div className="grid gap-4">
                      {workshop.longDescription
                        ?.split('Why Should You Attend?')[1]
                        .trim()
                        .split('\n')
                        .filter(item => item.trim())
                        .map((item, index) => {
                          const [title, description] = item.replace('- ', '').split(': ');
                          return (
                            <div
                              key={index}
                              className="flex items-start gap-4 p-4 rounded-xl bg-yellow-900/10 border border-yellow-500/20"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-5 h-5 text-yellow-300"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="font-semibold text-yellow-200 mb-1">{title}</h3>
                                <p className="text-gray-300">{description}</p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {/* Workshop Details */}
                  {(workshop.duration || workshop.location || workshop.date) && (
                    <div className="bg-gradient-to-br from-purple-900/20 to-yellow-900/20 rounded-2xl p-8 border border-yellow-500/20">
                      <h2 className="text-2xl font-bold text-yellow-200 mb-6 flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Workshop Details
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {workshop.duration && (
                          <div className="p-4 rounded-xl bg-purple-900/10 border border-purple-500/20">
                            <h3 className="text-purple-300 text-sm mb-1">Duration</h3>
                            <p className="text-white font-medium">{workshop.duration}</p>
                          </div>
                        )}
                        {workshop.date && (
                          <div className="p-4 rounded-xl bg-yellow-900/10 border border-yellow-500/20">
                            <h3 className="text-yellow-300 text-sm mb-1">Date</h3>
                            <p className="text-white font-medium">{workshop.date}</p>
                          </div>
                        )}
                        {workshop.location && (
                          <div className="p-4 rounded-xl bg-purple-900/10 border border-purple-500/20">
                            <h3 className="text-purple-300 text-sm mb-1">Location</h3>
                            <p className="text-white font-medium">{workshop.location}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Topics */}
                  {workshop.topics && workshop.topics.length > 0 && (
                    <div className="bg-gradient-to-br from-purple-900/20 to-yellow-900/20 rounded-2xl p-8 border border-yellow-500/20">
                      <h2 className="text-2xl font-bold text-yellow-200 mb-6 flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Topics Covered
                      </h2>
                      <div className="flex flex-wrap gap-3">
                        {workshop.topics.map((topic, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 rounded-full bg-purple-900/10 text-purple-300 border border-purple-900/30"
                          >
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
