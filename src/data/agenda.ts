import { AgendaDay, Event } from '../types/events';

export const agendaData: AgendaDay[] = [
  {
    date: 'Day 1 - February 15',
    events: [
      {
        id: 'registration-day1',
        time: '08:00 - 09:00',
        title: 'Registration & Breakfast',
        type: 'break',
        description: 'Pick up your conference materials and enjoy breakfast',
        location: 'Main Hall',
        refreshments: ['Continental Breakfast', 'Coffee & Tea', 'Fresh Juices']
      },
      {
        id: 'opening-ceremony',
        time: '09:00 - 09:45',
        title: 'Opening Ceremony: AI Revolution in India',
        type: 'opening',
        description: 'Welcome to AI Days 2025! Join us for an inspiring opening ceremony.',
        location: 'Main Auditorium',
        speakers: [
          {
            id: 'sarah-chen',
            name: 'Dr. Sarah Chen',
            role: 'Conference Chair',
            organization: 'AI Research Institute',
            bio: 'Leading researcher in AI ethics and development',
            image: '/speakers/sarah-chen.jpg',
            socialLinks: [
              { platform: 'twitter', url: 'https://twitter.com/sarahchen' },
              { platform: 'linkedin', url: 'https://linkedin.com/in/sarahchen' }
            ]
          }
        ],
        agenda: [
          'Welcome Address',
          'Conference Overview',
          'Vision for AI in India',
          'Cultural Performance'
        ]
      },
      {
        id: 'keynote-future-ai',
        time: '10:00 - 11:00',
        title: 'Keynote: The Future of AI in India',
        type: 'keynote',
        description: 'An inspiring look at how AI will transform India\'s future',
        location: 'Main Auditorium',
        track: 'Main Track',
        speaker: {
          id: 'raj-patel',
          name: 'Raj Patel',
          role: 'Chief AI Scientist',
          organization: 'TechForward India',
          bio: 'Pioneer in AI research with 15+ years of experience',
          image: '/speakers/raj-patel.jpg',
          socialLinks: [
            { platform: 'twitter', url: 'https://twitter.com/rajpatel' },
            { platform: 'linkedin', url: 'https://linkedin.com/in/rajpatel' }
          ]
        },
        abstract: 'Explore the transformative potential of AI in India, from healthcare to education...'
      },
      {
        id: 'panel-ai-ethics',
        time: '11:30 - 12:30',
        title: 'Panel: AI Ethics and Responsible Innovation',
        type: 'panel',
        description: 'Expert panel discussion on ethical AI development',
        location: 'Hall A',
        track: 'Ethics Track',
        moderator: {
          id: 'maya-singh',
          name: 'Dr. Maya Singh',
          role: 'Ethics Committee Chair',
          organization: 'AI Ethics Council',
          bio: 'Leading voice in AI ethics and governance',
          image: '/speakers/maya-singh.jpg',
          socialLinks: [
            { platform: 'twitter', url: 'https://twitter.com/mayasingh' }
          ]
        },
        panelists: [
          {
            id: 'alex-kumar',
            name: 'Alex Kumar',
            role: 'AI Policy Director',
            organization: 'Tech Ethics Institute',
            bio: 'Expert in AI policy and regulation',
            image: '/speakers/alex-kumar.jpg',
            socialLinks: [],
            expertise: 'AI Governance'
          },
          {
            id: 'priya-reddy',
            name: 'Dr. Priya Reddy',
            role: 'Research Director',
            organization: 'Ethics in AI Lab',
            bio: 'Specialist in ethical AI development',
            image: '/speakers/priya-reddy.jpg',
            socialLinks: [],
            expertise: 'Ethical AI Development'
          }
        ],
        topics: [
          'Responsible AI Development',
          'Ethical Guidelines',
          'Bias in AI Systems',
          'Future of AI Governance'
        ]
      },
      {
        id: 'lunch-day1',
        time: '12:30 - 13:30',
        title: 'Lunch Break & Networking',
        type: 'break',
        description: 'Enjoy lunch while networking with fellow attendees',
        location: 'Dining Hall',
        refreshments: ['Full Buffet Lunch', 'Vegetarian Options', 'Desserts']
      },
      {
        id: 'workshop-ai-products',
        time: '13:30 - 14:30',
        title: 'Workshop: Building AI-First Products',
        type: 'workshop',
        description: 'Hands-on workshop on AI product development',
        location: 'Workshop Room 1',
        track: 'Product Track',
        details: {
          id: 'ai-products-workshop',
          title: 'Building AI-First Products',
          description: 'Learn how to conceptualize, design, and build products with AI at their core',
          duration: '3 hours',
          requirements: [
            'Laptop with Python installed',
            'Basic programming knowledge',
            'Product design experience'
          ],
          takeaways: [
            'AI product framework',
            'Design thinking for AI',
            'Implementation strategies'
          ],
          materials: [
            'Workshop slides',
            'Code templates',
            'Case study documents'
          ],
          capacity: 30,
          organizer: {
            id: 'vikram-mehta',
            name: 'Vikram Mehta',
            role: 'Product Lead',
            organization: 'AI Products Inc',
            bio: 'Expert in AI product development with 10+ years experience',
            image: '/speakers/vikram-mehta.jpg',
            socialLinks: [
              { platform: 'linkedin', url: 'https://linkedin.com/in/vikrammehta' }
            ]
          }
        }
      },
      {
        id: 'entertainment-cultural',
        time: '19:00 - 20:00',
        title: 'Cultural Evening: AI & Arts Fusion',
        type: 'entertainment',
        description: 'A unique blend of traditional arts and AI-generated content',
        location: 'Cultural Center',
        performer: 'Fusion Arts Collective',
        genre: 'Mixed Media Performance'
      }
    ]
  },
  // Add Day 2 events here...
];
