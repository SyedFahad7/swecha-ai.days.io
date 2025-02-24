import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import {
  isAgendaEnabled,
  isSponsorsPageEnabled,
  isWorkshopsEnabled,
  isAboutUsEnabled,
  isTimelineEnabled,
} from '@/featureFlags';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "AI Days 2025 - India's Premier AI Conference",
  description:
    "Join us for AI Days 2025, India's leading artificial intelligence conference featuring 60+ speakers and cutting-edge AI innovations.",
  keywords:
    'AI conference, artificial intelligence, tech event, India AI, machine learning, deep learning, AI Days 2025',
  authors: [{ name: 'Swecha' }],
  creator: 'Swecha',
  publisher: 'Swecha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aidays.io'),
  openGraph: {
    title: "AI Days 2025 - India's Premier AI Conference",
    description:
      "Join us for AI Days 2025, India's leading artificial intelligence conference featuring 60+ speakers and cutting-edge AI innovations.",
    url: 'https://aidays.io',
    siteName: 'AI Days 2025',
    images: [
      {
        url: '/images/Swecha AI.jpg',
        width: 800,
        height: 600,
        alt: 'AI Days 2025 Conference',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Days 2025 - India's Premier AI Conference",
    description:
      "Join us for AI Days 2025, India's leading artificial intelligence conference featuring 60+ speakers and cutting-edge AI innovations.",
    images: ['/images/swecha_light.png'],
    creator: '@SwechaFSMI',
    site: '@SwechaFSMI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'technology',
};

const getNavItems = async () => {
  const [agendaEnabled, workshopsEnabled, sponsorsEnabled, aboutUsEnabled, timelineEnabled] =
    await Promise.all([
      isAgendaEnabled(),
      isWorkshopsEnabled(),
      isSponsorsPageEnabled(),
      isAboutUsEnabled(),
      isTimelineEnabled(),
    ]);

  let navItems = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/speakers' },
  ];

  if (aboutUsEnabled) {
    navItems = [...navItems, { name: 'About', path: '/about' }];
  }

  if (agendaEnabled) {
    navItems = [...navItems, { name: 'Agenda', path: '/agenda' }];
  }

  if (workshopsEnabled) {
    navItems = [...navItems, { name: 'Workshops', path: '/workshops' }];
  }

  if (sponsorsEnabled) {
    navItems = [...navItems, { name: 'Sponsors', path: '/sponsors' }];
  }

  if (timelineEnabled) {
    navItems = [...navItems, { name: 'Timeline', path: '/timeline' }];
  }

  navItems = [...navItems, { name: 'Venue', path: '/venue' }];

  return navItems;
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = await getNavItems();
  return (
    <html lang="en">
      <head>
        {/* Matomo */}
        <script>
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://analytics.fsmi.in/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '64']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </script>
        {/* End Matomo Code */}
      </head>
      <body className={inter.className}>
        <Navbar navItems={navItems} />
        {children}
        <Footer />
        {/* Matomo Image Tracker */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          referrerPolicy="no-referrer-when-downgrade"
          src="https://analytics.fsmi.in/matomo.php?idsite=64&rec=1"
          style={{ border: 0 }}
          alt=""
          suppressHydrationWarning
        />
        {/* End Matomo */}
      </body>
    </html>
  );
}
