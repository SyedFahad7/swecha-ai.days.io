export default function Venue() {
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

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative max-w-7xl mx-auto mb-24">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-yellow-500/50 to-purple-500/50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border border-yellow-500/50" />

          <h1 className="text-center text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            Venue
          </h1>
          <p className="text-center text-xl text-yellow-100/60 max-w-3xl mx-auto">
            Engineering Staff College of India, Gachibowli, Hyderabad
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto mb-24">
          <iframe
            width="100%"
            height="500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6882984162503!2d78.3713082!3d17.4267401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f13962ec0d%3A0xa62641b7e702d1e9!2sEngineering%20Staff%20College%20of%20India!5e0!3m2!1sen!2sin!4v1735982402520!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
