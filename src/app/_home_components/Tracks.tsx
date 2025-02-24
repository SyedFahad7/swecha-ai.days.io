// import Link from 'next/link';
import Track from './Track';
import { tracks } from '../../data/tracks';

const Tracks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
          Tracks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map(track => (
            <Track key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
