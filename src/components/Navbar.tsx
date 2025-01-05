import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
          >
            AI Days
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/speakers" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Speakers
            </Link>
            <Link 
              href="/agenda" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Agenda
            </Link>
            <Link 
              href="/workshops" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Workshops
            </Link>
            <button 
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-sm font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
