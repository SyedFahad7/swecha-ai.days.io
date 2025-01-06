import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  orgName: z.string().min(1, "Let's start with your organization's name"),
  contactName: z.string().min(1, "We'd love to know your name"),
  email: z.string().email("Oops! That email doesn't look quite right"),
  phone: z.string().min(10, "A bit short for a phone number, isn't it?"),
  message: z.string().min(10, 'Mind sharing a bit more in your message?'),
});

type FormData = z.infer<typeof schema>;

export function SponsorForm({ onSubmit }: { onSubmit: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmitForm = async (data: FormData) => {
    try {
      const response = await fetch('/api/sponsor-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        onSubmit();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="max-w-lg mx-auto mb-12">
      <div className="mb-4">
        <label htmlFor="orgName" className="block text-sm font-medium text-gray-300 mb-2">
          Organization Name
        </label>
        <input
          {...register('orgName')}
          type="text"
          id="orgName"
          placeholder="Enter your organization name"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.orgName && <p className="text-red-500 text-sm mt-1">{errors.orgName.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-2">
          Your Name
        </label>
        <input
          {...register('contactName')}
          type="text"
          id="contactName"
          placeholder="Enter your full name"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.contactName && (
          <p className="text-red-500 text-sm mt-1">{errors.contactName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder="Enter phone number"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          How would you like to sponsor?
        </label>
        <textarea
          {...register('message')}
          id="message"
          placeholder="Briefly describe your interest or ideas for sponsoring"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        <p className="text-sm text-gray-400 mt-1">
          Let us know how you&apos;d like to support the conference (e.g., financial, in-kind, or
          other contributions).
        </p>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-yellow-500 text-black rounded-full text-base md:text-lg font-semibold hover:bg-yellow-600 transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
}
