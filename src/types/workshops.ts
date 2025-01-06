export type SocialLink = {
  platform: 'twitter' | 'linkedin' | 'github' | 'website';
  url: string;
};

export type Instructor = {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio: string;
  image: string;
  expertise: string[];
  socialLinks: SocialLink[];
};

export type Workshop = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  date: string;
  time: string;
  location: string;
  instructor: Instructor;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  prerequisites: string[];
  topics: string[];
  learningOutcomes: string[];
  category: string;
  materials: string[];
  capacity: number;
  price: string;
  includes: string[];
};
