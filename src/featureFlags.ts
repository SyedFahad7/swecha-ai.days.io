import { unstable_flag as flag } from '@vercel/flags/next';

const isEnabled = (envVar: string | undefined) => envVar !== '0';

const createFlag = (key: string, envVar: string) =>
  flag({
    key,
    decide: () => isEnabled(process.env[envVar]),
  });

export const isAgendaEnabled = createFlag('agenda', 'AGENDA_ENABLED');
export const isWorkshopsEnabled = createFlag('workshops', 'WORKSHOPS_ENABLED');
export const isSponsorsPageEnabled = createFlag('sponsors', 'SPONSORS_ENABLED');
export const isBecomeASponsorEnabled = createFlag('sponsor-us', 'BECOME_SPONSOR_ENABLED');
export const isAboutUsEnabled = createFlag('about-us', 'ABOUT_US_ENABLED');
export const isTimelineEnabled = createFlag('timeline', 'TIMELINE_ENABLED');
export const isTicketsSectionEnabled = createFlag('tickets', 'NEXT_PUBLIC_TICKETS_ENABLED');
export const middleWareFlags = [
  isAgendaEnabled,
  isWorkshopsEnabled,
  isSponsorsPageEnabled,
  isBecomeASponsorEnabled,
  isAboutUsEnabled,
  isTimelineEnabled,
  isTicketsSectionEnabled,
];

// We use flag so that we don't show in progress pages on production.
// We block it at middleware.ts, and also hide some stuff in the UI.
