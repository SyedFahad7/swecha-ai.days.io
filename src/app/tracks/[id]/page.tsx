'use client';

import { useParams } from 'next/navigation';

const TrackDetailPage = () => {
  const { id } = useParams();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Track: {id}</h1>
        <p className="text-lg">Detailed information about the {id} track will be displayed here.</p>
      </div>
    </main>
  );
};

export default TrackDetailPage;
