import { config } from '@/config';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';

interface EventRegistrationButtonProps {
  className?: string;
}

const EventRegistrationButton: React.FC<EventRegistrationButtonProps> = ({ className }) => {
  const registrationLink = config.REGISTRATION_LINK;
  const isDisabled = !registrationLink;

  return (
    <Link
      href={isDisabled ? '#' : registrationLink}
      className={cn(
        'inline-block text-center md:px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25',
        isDisabled
          ? 'opacity cursor-wait'
          : 'hover:from-purple-500 hover:to-cyan-500 hover:shadow-cyan-500/25 cursor-grab',
        className
      )}
    >
      {isDisabled ? 'Registrations Opening Soon' : 'Register Now'}
    </Link>
  );
};

export default EventRegistrationButton;
