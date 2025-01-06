import Image from 'next/image';
import Link from 'next/link';

interface Speaker {
  name: string;
  role: string;
  topic: string;
  bio: string;
  image: string;
  social: {
    twitter: string;
    linkedin: string;
  };
}

interface SpeakerCardProps {
  speaker: Speaker;
  hideDescription?: boolean;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, hideDescription = false }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-[#0A0A0A] border border-yellow-900/30 rounded-lg overflow-hidden">
        <div className="absolute inset-0 opacity-50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10" />
      </div>
      <div className="relative p-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

        <div className="mb-8 relative">
          <div className="aspect-square overflow-hidden rounded-lg relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-yellow-500/10" />
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 border border-yellow-500/20 rounded-lg" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-yellow-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
        </div>

        <div className="relative space-y-4">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
            {speaker.name}
          </h3>
          <p className="text-purple-300/80 font-medium">{speaker.role}</p>
          <p className="text-yellow-100/60 text-sm">{speaker.topic}</p>
          {!hideDescription && (
            <p className="text-gray-400/80 text-sm leading-relaxed">{speaker.bio}</p>
          )}

          <div className="pt-6 flex gap-4">
            {speaker.social.twitter && (
              <Link
                href={speaker.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500/50 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.19 8.19 0 01-2.605.996A4.118 4.118 0 0016.5 4.5c-2.281 0-4.12 1.839-4.12 4.12 0 .323.036.637.106.938-3.42-.171-6.45-1.81-8.49-4.3-.354.609-.556 1.315-.556 2.067 0 1.426.726 2.676 1.83 3.4-1.006-.031-1.952-.308-2.775-.769v.077c0 1.993 1.415 3.648 3.298 4.024-.345.095-.708.146-1.082.146-.264 0-.52-.025-.77-.073.521 1.628 2.034 2.81 3.83 2.843-1.4 1.095-3.16 1.747-5.067 1.747-.33 0-.654-.019-.971-.057 1.803 1.155 3.94 1.826 6.227 1.826" />
                </svg>
              </Link>
            )}
            {speaker.social.linkedin && (
              <Link
                href={speaker.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500/50 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
