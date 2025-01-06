import { unstable_flag as flag } from '@vercel/flags/next';

export const isAgendaEnabled = flag({
  key: 'agenda',
  decide: () => process.env.AGENDA_ENABLED !== '0',
});

export const isWorkshopsEnabled = flag({
  key: 'workshops',
  decide: () => process.env.WORKSHOPS_ENABLED !== '0',
});

export const isSponsorsPageEnabled = flag({
  key: 'sponsors',
  decide: () => process.env.SPONSORS_ENABLED !== '0',
});

// We use flag so that we don't show in progress pages on production.
// We block it at middleware.ts, and also hide some stuff in the UI.
