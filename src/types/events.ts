export type SocialLink = {
  platform: 'twitter' | 'linkedin' | 'github' | 'website';
  url: string;
};

export type Speaker = {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
};

export type PanelMember = Speaker & {
  expertise: string;
};

export type WorkshopDetails = {
  id: string;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
  takeaways: string[];
  materials: string[];
  capacity: number;
  organizer: Speaker;
};

export type EventBase = {
  id: string;
  time: string;
  title: string;
  type: 'keynote' | 'panel' | 'workshop' | 'talk' | 'entertainment' | 'networking' | 'break' | 'opening';
  track?: string;
  description: string;
  location: string;
};

export type KeynoteEvent = EventBase & {
  type: 'keynote';
  speaker: Speaker;
  abstract: string;
};

export type PanelEvent = EventBase & {
  type: 'panel';
  moderator: Speaker;
  panelists: PanelMember[];
  topics: string[];
};

export type WorkshopEvent = EventBase & {
  type: 'workshop';
  details: WorkshopDetails;
};

export type TalkEvent = EventBase & {
  type: 'talk';
  speaker: Speaker;
  abstract: string;
  topics: string[];
};

export type NetworkingEvent = EventBase & {
  type: 'networking';
  facilitators?: Speaker[];
  format: string;
};

export type EntertainmentEvent = EventBase & {
  type: 'entertainment';
  performer: string;
  genre: string;
};

export type BreakEvent = EventBase & {
  type: 'break';
  refreshments?: string[];
};

export type OpeningEvent = EventBase & {
  type: 'opening';
  speakers: Speaker[];
  agenda: string[];
};

export type Event = 
  | KeynoteEvent 
  | PanelEvent 
  | WorkshopEvent 
  | TalkEvent 
  | NetworkingEvent 
  | EntertainmentEvent 
  | BreakEvent
  | OpeningEvent;

export type AgendaDay = {
  date: string;
  events: Event[];
};
