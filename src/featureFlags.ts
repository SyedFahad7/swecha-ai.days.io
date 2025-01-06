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

// We use flag so that we don't show in progress pages on production.
// We block it at middleware.ts, and also hide some stuff in the UI.
