export const config = {
  SPONSOR_FORM_URL: process.env.NEXT_PUBLIC_SPONSOR_FORM_URL ?? null,
  REGISTRATION_LINK: process.env.NEXT_PUBLIC_REGISTRATION_LINK ?? null,
  PARTICIPANT_INTEREST_FORM_URL: process.env.NEXT_PUBLIC_PARTICIPANT_INTEREST_FORM_URL ?? null,
  CONFERENCE_DAYS: {
    day1: new Date('2025-04-12T08:00:00+05:30'),
    day2: new Date('2025-04-13T08:00:00+05:30'),
    datesLabel: 'April 12 - 13, 2025',
  },
};
