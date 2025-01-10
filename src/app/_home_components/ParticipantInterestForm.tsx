import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { config } from '@/config';
import { AnimatePresence, motion } from 'framer-motion';

const formSchema = z.object({
  fullName: z.string().min(1, "Oops! We didn't catch your name"),
  email: z.string().email('Hmm, that email looks a bit off. Mind double-checking?'),
  phone: z.string().min(10, "A bit short for a phone number, isn't it?"),
  interests: z.array(z.string()).min(1, "Pick at least one interest - we're curious!"),
  otherInterest: z.string().optional(),
  isStudent: z.boolean(),
  designation: z.string().optional(),
  organization: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ParticipantInterestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: [],
      isStudent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      if (!config.PARTICIPANT_INTEREST_FORM_URL) {
        setError(
          'We apologize, but our form submission service is currently unavailable. Please try again later.'
        );
        return;
      }
      const humanReadableData = {
        'Full Name': data.fullName,
        'Email Address': data.email,
        'Phone Number': data.phone,
        Interests: data.interests.join(', '),
        'Other Interest': data.otherInterest || '',
        'Is Student': data.isStudent ? 'Yes' : 'No',
        'Designation or Course/Major': data.designation || '',
        'Organization or Institution': data.organization || '',
      };
      const response = await fetch(config.PARTICIPANT_INTEREST_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(humanReadableData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        console.log('🎉 Form submitted successfully! Time to celebrate!');
      } else {
        setError('Apologies, we encountered an issue. Please try submitting again.');
      }
    } catch {
      setError("We're experiencing technical difficulties. Please try again later.");
    }
  };

  const interests = watch('interests');
  const isStudent = watch('isStudent');

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto mb-12 text-center">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Thank You!</h2>
        <p className="text-gray-300">
          We&apos;ve received your interest in AI Days 2025. We&apos;ll keep you updated with the
          latest conference information.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name (Required)
          </label>
          <input
            {...register('fullName')}
            id="fullName"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address (Required)
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          <p className="mt-1 text-xs text-gray-400">For updates and registration details</p>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number (Required)
          </label>
          <input
            {...register('phone')}
            id="phone"
            type="tel"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <fieldset>
            <legend className="block text-sm font-medium text-gray-300 mb-1">
              What interests you the most about the conference? (Select one or more)
            </legend>
            {[
              'Keynote Speakers',
              'Networking Opportunities',
              'Workshops/Hands-on Sessions',
              'AI Trends and Innovations',
              'Career Insights',
              'Other',
            ].map(interest => (
              <div key={interest} className="flex items-center mt-2">
                <input
                  {...register('interests')}
                  id={`interest-${interest}`}
                  type="checkbox"
                  value={interest}
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-700 rounded"
                />
                <label
                  htmlFor={`interest-${interest}`}
                  className="ml-2 block text-sm text-gray-300"
                >
                  {interest}
                </label>
              </div>
            ))}
          </fieldset>
          {errors.interests && (
            <p className="mt-1 text-sm text-red-500">{errors.interests.message}</p>
          )}
        </div>

        <AnimatePresence>
          {interests && interests.includes('Other') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label
                htmlFor="otherInterest"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Please specify other interest
              </label>
              <input
                {...register('otherInterest')}
                id="otherInterest"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center mb-4">
          <input
            {...register('isStudent')}
            id="isStudent"
            type="checkbox"
            className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-700 rounded"
          />
          <label htmlFor="isStudent" className="ml-2 block text-sm text-gray-300">
            I am a student
          </label>
        </div>

        <div>
          <label htmlFor="designation" className="block text-sm font-medium text-gray-300 mb-1">
            {isStudent ? 'Course/Major (Optional)' : 'Designation (Optional)'}
          </label>
          <input
            {...register('designation')}
            id="designation"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-1">
            {isStudent ? 'Institution (Optional)' : 'Organization (Optional)'}
          </label>
          <input
            {...register('organization')}
            id="organization"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
          />
          <p className="mt-1 text-xs text-gray-400">Helps us understand your background</p>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
        >
          Submit
        </button>

        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </form>
    </div>
  );
}
