export type TicketType = 'standard' | 'sponsor';

export interface BaseTicket {
  title: string;
  benefits: string[];
  availableUntil: string;
  purchaseUrl: string;
  type: TicketType;
  links?: {
    path: string;
    label: string;
  }[];
}

export interface StandardTicket extends BaseTicket {
  type: 'standard';
  price: number;
  priceEarlyBird: number;
}

export interface SponsorTicket extends BaseTicket {
  type: 'sponsor';
  minSponsorAmount: number;
}

export type Ticket = StandardTicket | SponsorTicket;

export const earlyBirdDate = new Date('2025-03-07T23:59:59+05:30');

export const tickets: Ticket[] = [
  {
    type: 'standard',
    title: 'AI Enthusiast Ticket',
    benefits: [
      'For beginners interested in Generative AI',
      'Inspiring Keynotes, Panels & Talks',
      'Expert Mentorship',
      'Beginner level workshops with certification*',
      'Registration Kit',
      'Q & A sessions & Access to recorded talks',
      'Lunch and refreshments for 2 days',
    ],
    availableUntil: '',
    price: 3499,
    priceEarlyBird: 2499,
    purchaseUrl: 'https://swechafoundation.mojo.page/ai-days-2025-enthusiast',
  },
  {
    type: 'standard',
    title: 'AI Power User Ticket',
    benefits: [
      'For AI practitioners seeking advanced content',
      'Includes all benefits of the AI Enthusiast ticket',
      'Exclusive networking opportunities',
      'Intermediate level workshops with certification',
    ],
    availableUntil: '',
    price: 4499,
    priceEarlyBird: 3499,
    purchaseUrl: 'https://swechafoundation.mojo.page/ai-days-2025-power-user',
  },
  {
    type: 'standard',
    title: 'AI Creator Ticket',
    benefits: [
      'For professionals & innovators actively engaged in AI',
      'Includes all benefits of the AI Power User ticket',
      'Advanced workshops with certification',
      'Limited seats only',
      'Official AI Days Conference Merchandise (T-Shirt)',
    ],
    availableUntil: '',
    price: 5499,
    priceEarlyBird: 4499,
    purchaseUrl: 'https://swechafoundation.mojo.page/ai-days-2025-creator',
  },
  {
    type: 'sponsor',
    title: 'Supporter Ticket',
    benefits: [
      'For Sponsors, industry leaders & AI advocates',
      'Access to all the workshops',
      'Dedicated networking sessions',
      'Access to Speaker lounge & High-tea',
      'Official AI Days Conference Merchandise (T-Shirt)',
      'Lunch and refreshments for 2 days',
    ],
    availableUntil: '',
    minSponsorAmount: 10000,
    purchaseUrl: 'https://swechafoundation.mojo.page/ai-days-2025-supporter',
  },
];
