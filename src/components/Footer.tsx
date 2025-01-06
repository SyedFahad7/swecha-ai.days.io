import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-rows-[repeat(auto-fit,minmax(50px,1fr))] opacity-10">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="border border-[#2A2A2A]" />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400 bg-clip-text text-transparent">
              AI Days 2025
            </h3>
            <p className="text-yellow-100/60">Shaping the future of AI together</p>
          </div>
          {/* <nav className="w-full md:w-1/3 mb-8 md:mb-0">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Speakers</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Schedule</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Workshops</a></li>
            </ul>
          </nav> */}
          {/* <div className="w-full md:w-1/3">
            <a href="#" className="inline-block px-6 py-3 border border-yellow-500 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300">
              Register Now
            </a>
          </div> */}
          <div className="w-full md:w-1/2 md:text-right">
            <p className="text-yellow-100/60">Powered by</p>
            <a
              href="https://swecha.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
            >
              <div className="w-24 h-8 mt-5 ml-auto relative">
                <Image
                  src="/images/swecha_light.png"
                  alt="Swecha"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-yellow-100/60">
          <p>
            CC BY-NC-SA 4.0 |{' '}
            <a
              href="https://swecha.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              swecha.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
