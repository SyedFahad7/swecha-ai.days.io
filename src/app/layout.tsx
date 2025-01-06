import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { isAgendaEnabled, isSponsorsPageEnabled, isWorkshopsEnabled } from '@/featureFlags';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "AI Days 2025 - India's Largest AI Conference",
  description:
    "Join us for AI Days 2025, India's premier artificial intelligence conference featuring 60+ speakers and 2000+ delegates.",
};

const getNavItems = async () => {
  const [agendaEnabled, workshopsEnabled, sponsorsEnabled] = await Promise.all([
    isAgendaEnabled(),
    isWorkshopsEnabled(),
    isSponsorsPageEnabled(),
  ]);

  let navItems = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/speakers' },
  ];

  if (agendaEnabled) {
    navItems = [...navItems, { name: 'Agenda', path: '/agenda' }];
  }

  navItems = [...navItems, { name: 'Venue', path: '/venue' }];

  if (workshopsEnabled) {
    navItems = [...navItems, { name: 'Workshops', path: '/workshops' }];
  }

  if (sponsorsEnabled) {
    navItems = [...navItems, { name: 'Sponsors', path: '/sponsors' }];
  }

  return navItems;
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = await getNavItems();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
