import Link from 'next/link';
import { TrackType } from '@/data/tracks';
import { GoArrowRight } from 'react-icons/go';

const Track = ({ track }: { track: TrackType }) => {
  const IconComponent = track.icon;

  return (
    <div className="group relative overflow-hidden rounded-lg border border-yellow-900/30 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10 hover:from-purple-900/20 hover:to-yellow-900/20 transition-colors duration-500 transition-transform duration-200 transform hover:scale-105">
      <div className="flex flex-col h-full sm:p-8 p-4">
        <div className="flex justify-start mb-4 sm:mb-6">
          <IconComponent className="sm:text-4xl text-2xl text-yellow-500" />
        </div>
        <h3 className="sm:text-2xl h-24 text-md font-semibold mb-2 text-left bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
          {track.name}
        </h3>
        <div className="flex justify-between items-center">
          <Link href={`/tracks/${track.id}`} legacyBehavior>
            <a className="text-yellow-500 hover:text-yellow-400 group-hover:underline group-hover:underline-offset-4 transition-colors duration-300 flex justify-between items-center">
              <span className="text-xs sm:text-sm">Read More</span>
            </a>
          </Link>
          <div className="bg-yellow-500 p-1 rounded-full group-hover:bg-yellow-400 transition-colors duration-300">
            <GoArrowRight className="transform transition-transform duration-300 sm:text-3xl text-md sm:group-hover:-rotate-45 -rotate-45 sm:rotate-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
