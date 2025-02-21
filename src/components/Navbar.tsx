'use client';
import Link from 'next/link';
import Image from 'next/image';
import EventRegistrationButton from './EventRegistrationButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from './ui/NavbarBones';

export default function Navbar({ navItems }: { navItems: { name: string; path: string }[] }) {
  return (
    <NavigationMenu className="fixed top-0 max-w-full left-0 right-0 z-50 bg-black/[85%] border-b border-purple-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <NavigationMenuList className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
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
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map(item => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </div>
          {/* Mobile Menu */}
          <div className="flex items-center">
            <NavigationMenuItem className="hidden xl:block">
              <EventRegistrationButton className="px-4 py-2" />
            </NavigationMenuItem>
            <NavigationMenuItem className="xl:hidden">
              <NavigationMenuTrigger>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="px-8 py-8 bg-black/10 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  {navItems.map(item => (
                    <NavigationMenuLink key={item.name} asChild>
                      <Link
                        href={item.path}
                        className="block text-gray-300 hover:text-white transition-colors py-2 px-4 hover:bg-purple-900/20"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                  <EventRegistrationButton className="w-full px-4 py-2 mt-2" />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </div>
    </NavigationMenu>
  );
}
