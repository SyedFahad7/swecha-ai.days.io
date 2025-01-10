'use client';
import React from 'react';
import { ParticipantInterestForm } from '@/app/_home_components/ParticipantInterestForm';
import { cn } from '@/utils/cn';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from './ui/Dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { config } from '@/config';

interface EventRegistrationButtonProps {
  className?: string;
}

const EventRegistrationButton: React.FC<EventRegistrationButtonProps> = ({ className }) => {
  if (config.REGISTRATION_LINK) {
    return (
      <a
        href={config.REGISTRATION_LINK}
        className={cn(
          'inline-block text-center md:px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25 hover:from-purple-500 hover:to-cyan-500 hover:shadow-cyan-500/25',
          className
        )}
      >
        Register Now
      </a>
    );
  }

  if (config.PARTICIPANT_INTEREST_FORM_URL) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button
            className={cn(
              'inline-block text-center md:px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25 hover:from-purple-500 hover:to-cyan-500 hover:shadow-cyan-500/25',
              className
            )}
          >
            Express Interest
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-800">
          <VisuallyHidden>
            <DialogTitle>Participant Interest Form</DialogTitle>
          </VisuallyHidden>
          <ParticipantInterestForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <button
      className={cn(
        'inline-block text-center md:px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full text-lg font-semibold cursor-not-allowed',
        className
      )}
      disabled
    >
      Registration Opening Soon
    </button>
  );
};

export default EventRegistrationButton;
