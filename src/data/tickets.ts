interface Ticket {
  title: string;
  benefits: string[];
  availableUntil: string;
  price: number;
  links?: {
    path: string;
    label: string;
  }[];
}

export const tickets: Ticket[] = [
  {
    title: 'Conference - Regular Ticket',
    benefits: [
      'Access to all conference tracks.',
      'Access to join any one workshop.',
      'Digital copy of Certificate.',
      'Lunch and refreshments for 2 days.',
      'Registration kit.',
    ],
    availableUntil: '13th Apr 2025, 05:00 PM IST',
    price: 6000,
  },
  {
    title: 'Conference - Supporter Ticket',
    benefits: [
      'Includes all benefits of the Regular ticket.',
      'Special access to all the Conference course content.',
      'Special access to sponsors.',
      'Digital & Hardcopy of certificate.',
      'Official AI Days Conference Merch T-Shirt.',
    ],
    availableUntil: '12th Apr 2025, 10:00 AM IST',
    price: 10000,
  },
  {
    title: 'Master Class: Build your own Co-Pilot',
    benefits: [
      'Includes all benefits of the Regular ticket.',
      'Includes all benefits of the Supporter ticket.',
      'Post-event mentorship for Al-portfolio building & guidance for interviews of Al job roles.',
      'Best suitable for Engineering teams, start-up, faculty and everyone who are aiming to master Al skills.',
    ],
    availableUntil: '13th Apr 2025, 11:00 AM IST',
    price: 15000,
    links: [
      {
        label: 'View Masterclass',
        path: '/masterclass',
      },
    ],
  },
];
