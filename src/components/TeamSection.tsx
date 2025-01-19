import Image from 'next/image';
import Link from 'next/link';

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: SocialLinks;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  className?: string;
}

export default function TeamSection({ title, members, className = '' }: TeamSectionProps) {
  return (
    <section className={`max-w-7xl mx-auto mb-24 bg-gray-50 py-16 px-4 ${className}`}>
      <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
            <p className="text-gray-600 text-center mb-4">{member.role}</p>
            <div className="flex space-x-4 opacity-80 hover:opacity-100 transition-opacity">
              {member.social.linkedin && (
                <Link
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              )}
              {member.social.twitter && (
                <Link
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-colors"
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
