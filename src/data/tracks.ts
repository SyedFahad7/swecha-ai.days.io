import { IconType } from 'react-icons';
import { FaHeartbeat, FaShieldAlt, FaGraduationCap, FaMicrochip, FaFilm } from 'react-icons/fa';
import { SiOpensourceinitiative } from 'react-icons/si';

export type TrackType = {
  id: string;
  name: string;
  icon: IconType;
};

export const tracks: TrackType[] = [
  {
    id: 'open-source',
    name: 'Open Source',
    icon: SiOpensourceinitiative,
  },
  {
    id: 'life-sciences',
    name: 'Life Sciences',
    icon: FaHeartbeat,
  },
  {
    id: 'safe-responsible-ai',
    name: 'Safe & Responsible AI',
    icon: FaShieldAlt,
  },
  {
    id: 'edutech',
    name: 'EduTech',
    icon: FaGraduationCap,
  },
  {
    id: 'semi-conductor',
    name: 'Semi Conductor',
    icon: FaMicrochip,
  },
  {
    id: 'media-entertainment',
    name: 'Media & Entertainment',
    icon: FaFilm,
  },
];
