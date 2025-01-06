import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { isAgendaEnabled } from '@/featureFlags';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "AI Days 2025 - India's Largest AI Conference",
  description:
    "Join us for AI Days 2025, India's premier artificial intelligence conference featuring 60+ speakers and 2000+ delegates.",
};

const getNavItems = async () => {
  let navItems = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/speakers' },
  ];

  if (await isAgendaEnabled()) {
    navItems = [...navItems, { name: 'Agenda', path: '/agenda' }];
  }

  navItems = [
    ...navItems,
    { name: 'Venue', path: '/venue' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Sponsors', path: '/sponsors' },
  ];
  return navItems;
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = await getNavItems();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
