export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Neon background effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <p className="text-lg md:text-xl mb-4 text-purple-300 font-medium tracking-wider">
            India&#39;s Largest AI Conference
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse">
            AI Days
          </h1>
          <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl mb-8">
            <span className="text-purple-300">📆</span>
            <span className="text-cyan-300">15 - 16 February 2025</span>
          </div>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Come learn and celebrate with us!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { number: '02', label: 'Days' },
              { number: '60+', label: 'Speakers' },
              { number: '2000+', label: 'Delegates' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25">
            Register Now
          </button>
        </div>
      </div>
    </main>
  );
}
