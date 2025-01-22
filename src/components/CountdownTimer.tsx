'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import EventRegistrationButton from './EventRegistrationButton';
import { config } from '@/config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventStarted, setEventStarted] = useState<boolean>(false);

  useEffect(() => {
    const calculateTimeLeft = (): void => {
      const startDate: Date = new Date(config.CONFERENCE_DAYS.day1);
      const now: Date = new Date();
      const difference: number = startDate.getTime() - now.getTime();

      if (difference > 0) {
        const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes: number = Math.floor((difference / 1000 / 60) % 60);
        const seconds: number = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setEventStarted(true);
      }
    };

    calculateTimeLeft();
    const timer: NodeJS.Timeout = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const validUnits: [string, number][] = Object.entries(timeLeft).reduce<[string, number][]>(
    (acc, [unit, value]) => {
      if (value > 0 || acc.length > 0) {
        acc.push([unit, value]);
      }
      return acc;
    },
    []
  );

  if (eventStarted) {
    return (
      <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 p-8 border border-purple-500/20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-yellow-200 mb-4">AI Days 2025 is here!</h2>
        <p className="text-xl text-gray-300">
          Join us now! -{' '}
          <Link href="/venue" className="text-yellow-300 hover:text-yellow-400 underline">
            View Venue Details
          </Link>
        </p>
      </div>
    );
  }

  if (validUnits.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 p-8 border border-purple-500/20 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-yellow-200 mb-4">Countdown to AI Days 2025</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {validUnits.map(([label, value], index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl bg-purple-900/10 border border-purple-500/20"
          >
            <div className="text-4xl font-bold text-yellow-200">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-xl text-gray-300">
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </div>
          </div>
        ))}
      </div>
      <EventRegistrationButton className="w-full" />
    </div>
  );
};

export default CountdownTimer;
