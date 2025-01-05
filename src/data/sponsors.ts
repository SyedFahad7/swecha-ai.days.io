export type Sponsor = {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  tier: 'platinum' | 'silver' | 'associate';
};

export const sponsorsData: Sponsor[] = [
  {
    id: 'codeium',
    name: 'Codeium',
    description:
      'Leading the revolution in AI-powered software development with cutting-edge tools and technologies.',
    logo: '/sponsors/codeium.png',
    website: 'https://codeium.com',
    tier: 'platinum',
  },
  {
    id: 'techcorp',
    name: 'TechCorp Solutions',
    description:
      'Enterprise software solutions with a focus on AI integration and cloud computing.',
    logo: '/sponsors/techcorp.png',
    website: 'https://techcorp.example.com',
    tier: 'silver',
  },
  {
    id: 'aiventures',
    name: 'AI Ventures',
    description:
      'Venture capital firm specializing in artificial intelligence and machine learning startups.',
    logo: '/sponsors/aiventures.png',
    website: 'https://aiventures.example.com',
    tier: 'silver',
  },
  {
    id: 'futuretech',
    name: 'FutureTech Labs',
    description: 'Research and development in emerging AI technologies and quantum computing.',
    logo: '/sponsors/futuretech.png',
    website: 'https://futuretech.example.com',
    tier: 'silver',
  },
  {
    id: 'datawise',
    name: 'DataWise Analytics',
    description: 'Data analytics and machine learning solutions for businesses.',
    logo: '/sponsors/datawise.png',
    website: 'https://datawise.example.com',
    tier: 'associate',
  },
  {
    id: 'airesearch',
    name: 'AI Research Foundation',
    description: 'Non-profit organization promoting ethical AI development and research.',
    logo: '/sponsors/airesearch.png',
    website: 'https://airesearch.example.com',
    tier: 'associate',
  },
  {
    id: 'cloudai',
    name: 'CloudAI Systems',
    description: 'Cloud-based AI infrastructure and deployment solutions.',
    logo: '/sponsors/cloudai.png',
    website: 'https://cloudai.example.com',
    tier: 'associate',
  },
];
