export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: 'milestone' | 'partnership' | 'theme' | 'launch';
  icon?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 2020,
    title: 'Swecha AI Days Founded',
    description:
      'Initial conceptualization and foundation of Swecha AI Days with a vision to democratize AI education.',
    category: 'milestone',
    icon: '🎯',
  },
  {
    year: 2021,
    title: 'First Virtual Conference Launch',
    description:
      'Successfully launched the first virtual conference with over 500 participants from across India.',
    category: 'launch',
    icon: '🚀',
  },
  {
    year: 2022,
    title: 'Introduction of Ethical AI Track',
    description: 'Added dedicated track for Ethical AI and Responsible Machine Learning.',
    category: 'theme',
    icon: '⚖️',
  },
  {
    year: 2023,
    title: 'Partnership with Major Tech Companies',
    description:
      'Established partnerships with leading tech companies to provide real-world industry exposure.',
    category: 'partnership',
    icon: '🤝',
  },
  {
    year: 2024,
    title: 'Milestone: 2000+ Attendees',
    description: 'Reached a new milestone with over 2000 participants from various backgrounds.',
    category: 'milestone',
    icon: '📈',
  },
  {
    year: 2025,
    title: 'AI for Social Good Initiative',
    description:
      'Launched special track focusing on AI applications for social impact and community development.',
    category: 'theme',
    icon: '🌟',
  },
];
