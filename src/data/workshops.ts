import { Workshop } from '@/types/workshops';

export const workshopsData: Workshop[] = [
  {
    id: 'ai-personality',
    title: 'Crafting AI Personality & Temperament',
    description: 'Explore the art of designing AI systems with distinct personalities. Learn to create AI agents with emotional intelligence and appropriate response patterns.',
    longDescription: `In this intensive workshop, you'll dive deep into the fascinating world of AI personality design. Learn how to create AI systems that don't just process information, but interact with users in meaningful, emotionally intelligent ways.

We'll explore advanced techniques in natural language processing, sentiment analysis, and behavioral modeling to create AI personalities that are both engaging and appropriate for their intended use cases.

The workshop combines theoretical knowledge with hands-on exercises, allowing you to experiment with different personality types and response patterns.`,
    duration: '3 hours',
    date: '2025-02-15',
    time: '14:00 - 17:00',
    location: 'Workshop Room A',
    instructor: {
      id: 'maya-patel',
      name: 'Dr. Maya Patel',
      role: 'AI Psychology Expert',
      organization: 'Institute of AI Behavior',
      bio: 'Dr. Maya Patel is a pioneer in AI psychology and personality design. With over 15 years of experience in cognitive science and AI development, she has helped shape the personality frameworks of several major AI assistants.',
      image: '/speakers/maya-patel.jpg',
      expertise: ['AI Psychology', 'Cognitive Science', 'Machine Learning'],
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com/mayapatel' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/mayapatel' }
      ]
    },
    level: 'Advanced',
    prerequisites: [
      'Basic ML knowledge',
      'Python programming',
      'Understanding of NLP concepts'
    ],
    topics: [
      'Emotional response mapping',
      'Personality matrix design',
      'Ethical considerations',
      'Behavioral testing',
      'Sentiment analysis integration',
      'Response pattern optimization'
    ],
    learningOutcomes: [
      'Design comprehensive AI personality frameworks',
      'Implement emotional intelligence in AI systems',
      'Create appropriate response patterns',
      'Test and validate AI behavior',
      'Ensure ethical compliance in personality design'
    ],
    category: 'AI Design',
    materials: [
      'Personality design toolkit',
      'Code templates',
      'Testing frameworks',
      'Case studies',
      'Reference documentation'
    ],
    capacity: 30,
    price: '₹15,000',
    includes: [
      'Workshop materials',
      'Lunch and refreshments',
      'Certificate of completion',
      '1-month access to online resources'
    ]
  },
  {
    id: 'ethical-bounds',
    title: 'Setting Ethical Boundaries in AI',
    description: 'Hands-on workshop on implementing ethical guidelines and moral frameworks in AI systems. Create AIs that respect human values and societal norms.',
    longDescription: `This comprehensive workshop focuses on the critical aspect of embedding ethical principles into AI systems. You'll learn practical approaches to implementing moral frameworks and ensuring AI systems operate within acceptable ethical boundaries.

Through real-world case studies and hands-on exercises, participants will explore various ethical challenges in AI development and learn proven strategies for addressing them. The workshop emphasizes both theoretical understanding and practical implementation.`,
    duration: '4 hours',
    date: '2025-02-15',
    time: '09:00 - 13:00',
    location: 'Workshop Room B',
    instructor: {
      id: 'sarah-chen',
      name: 'Prof. Sarah Chen',
      role: 'AI Ethics Researcher',
      organization: 'Global AI Ethics Institute',
      bio: 'Prof. Sarah Chen is a leading authority in AI ethics and responsible AI development. Her research focuses on creating practical frameworks for ethical AI implementation.',
      image: '/speakers/sarah-chen.jpg',
      expertise: ['AI Ethics', 'Policy Development', 'Responsible AI'],
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com/sarahchen' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/sarahchen' }
      ]
    },
    level: 'Intermediate',
    prerequisites: [
      'Understanding of AI basics',
      'Interest in ethics',
      'Basic programming knowledge'
    ],
    topics: [
      'Moral framework implementation',
      'Boundary setting techniques',
      'Value alignment',
      'Safety protocols',
      'Bias detection and mitigation',
      'Ethical decision making'
    ],
    learningOutcomes: [
      'Implement ethical guidelines in AI systems',
      'Design effective boundary conditions',
      'Create value-aligned AI behaviors',
      'Develop ethical testing frameworks',
      'Address bias in AI systems'
    ],
    category: 'AI Ethics',
    materials: [
      'Ethics framework toolkit',
      'Implementation guides',
      'Case study collection',
      'Assessment templates'
    ],
    capacity: 40,
    price: '₹12,000',
    includes: [
      'Workshop materials',
      'Ethics toolkit',
      'Breakfast and refreshments',
      'Certificate of completion'
    ]
  }
  // Add more workshops here...
];
