import { cn } from '@/utils/cn';
import React from 'react';

interface EventRegistrationButtonProps {
  className?: string;
  onClick?: () => void;
}

const EventRegistrationButton: React.FC<EventRegistrationButtonProps> = ({
  className,
  onClick,
}) => {
  return (
    <button
      className={cn(
        'md:px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25',
        className
      )}
      onClick={onClick}
    >
      Registrations Opening Soon
    </button>
  );
};

export default EventRegistrationButton;
