'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { config } from '@/config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [eventStarted, setEventStarted] = useState<boolean>(false);

  useEffect(() => {
    const calculateTimeLeft = (): void => {
      const startDate: Date = new Date(config.CONFERENCE_DAYS.day1);
      const now: Date = new Date();
      const difference: number = startDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setEventStarted(true);
      }
    };

    calculateTimeLeft();
    const timer: NodeJS.Timeout = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const validUnits: [string, number][] = Object.entries(timeLeft).reduce<[string, number][]>(
    (acc, [unit, value]) =>
      value > 0 || acc.length > 0 ? [...acc, [value === 1 ? unit.slice(0, -1) : unit, value]] : acc,
    []
  );

  if (eventStarted) {
    return (
      <div className="bg-gradient-to-br from-purple-900/10 to-purple-900/5 p-4 border border-purple-500/10 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-200 mb-2">AI Days 2025 is here!</h3>
        <p className="text-sm text-gray-300">
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
    <div className="bg-gradient-to-br from-purple-900/10 to-purple-900/5 p-4 border border-purple-500/10 rounded-lg">
      <h3 className="text-lg font-semibold text-yellow-200 mb-2">Event kicks off in</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {validUnits.map(([label, value], index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 rounded-lg bg-purple-900/10 border border-purple-500/10"
          >
            <div className="text-xl font-bold text-yellow-200">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-300 capitalize">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
