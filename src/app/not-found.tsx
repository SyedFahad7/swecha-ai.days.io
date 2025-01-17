import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="pt-20 min-h-screen flex items-center justify-center bg-black text-white relative">
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-rows-[repeat(auto-fit,minmax(50px,1fr))] opacity-10">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="border border-[#2A2A2A] relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-900/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          />
        ))}
      </div>
      <div className="text-center px-4 z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-yellow-300">Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-yellow-500 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
