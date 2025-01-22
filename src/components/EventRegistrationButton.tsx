'use client';
import React from 'react';
import { ParticipantInterestForm } from '@/app/_home_components/ParticipantInterestForm';
import { cn } from '@/utils/cn';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from './ui/Dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { config } from '@/config';

interface EventRegistrationButtonProps {
  className?: string;
  openInterestFromByDefault?: boolean;
}

const EventRegistrationButton: React.FC<EventRegistrationButtonProps> = ({
  className,
  openInterestFromByDefault,
}) => {
  if (config.REGISTRATION_LINK) {
    return (
      <a
        href={config.REGISTRATION_LINK}
        className={cn(
          'inline-flex items-center text-center px-4 sm:px-6 lg:px-8 py-4 bg-gradient-to-br from-purple-900/20 to-purple-900/5 rounded-2xl border border-purple-500/20 text-xl font-semibold text-purple-200 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:from-purple-800/20 hover:to-purple-800/5 hover:shadow-cyan-500/25',
          className
        )}
      >
        Register Now
      </a>
    );
  }

  if (config.PARTICIPANT_INTEREST_FORM_URL) {
    return (
      <Dialog defaultOpen={openInterestFromByDefault}>
        <DialogTrigger asChild>
          <button
            className={cn(
              'inline-flex items-center text-center px-4 sm:px-6 lg:px-8 py-4 bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-2xl border border-yellow-500/20 text-xl font-semibold text-yellow-200 transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:from-yellow-800/20 hover:to-yellow-800/5 hover:shadow-cyan-500/25',
              className
            )}
          >
            Express Interest
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-lg mx-auto overflow-y-auto max-h-[80vh] px-4 bg-gradient-to-br from-purple-900/20 to-purple-900/5 rounded-2xl border border-purple-500/20">
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
        'inline-flex items-center text-center px-4 sm:px-6 lg:px-8 py-4 bg-gradient-to-br from-gray-900/20 to-gray-900/5 rounded-2xl border border-gray-500/20 text-xl font-semibold text-gray-300 cursor-not-allowed',
        className
      )}
      disabled
    >
      Registration Opening Soon
    </button>
  );
};

export default EventRegistrationButton;
