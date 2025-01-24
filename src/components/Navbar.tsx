'use client';
import { useState } from 'react';
import Link from 'next/link';
import EventRegistrationButton from './EventRegistrationButton';
import Image from 'next/image';

export default function Navbar({ navItems }: { navItems: { name: string; path: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-purple-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 transition-all duration-300"
          >
            <Image
              src="/images/logo-sm.svg"
              alt="AI Days 2025"
              width={200}
              height={54}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
          <div className="hidden xl:flex items-center space-x-8">
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
            <EventRegistrationButton className="px-4 py-2" />
          </div>
          <div className="xl:hidden">
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
        <div className="xl:hidden bg-black/10 backdrop-blur-md">
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
            <EventRegistrationButton className="w-full px-4 py-2" />
          </div>
        </div>
      )}
    </nav>
  );
}
