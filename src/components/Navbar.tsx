'use client';
import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Speakers', path: '/speakers' },
  { name: 'Agenda', path: '/agenda' },
  { name: 'Venue', path: '/venue' },
  { name: 'Workshops', path: '/workshops' },
  { name: 'Sponsors', path: '/sponsors' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 transition-all duration-300"
          >
            AI Days
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-sm font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25 transform hover:scale-105">
              Registrations Opening Soon
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/10 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.path}
                className="block text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-purple-900/20"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-sm font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25 transform hover:scale-105">
              Registrations Opening Soon
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
