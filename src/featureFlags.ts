import { unstable_flag as flag } from '@vercel/flags/next';

export const isAgendaEnabled = flag({
  key: 'agenda',
  decide: () => process.env.AGENDA_ENABLED !== '0',
});
