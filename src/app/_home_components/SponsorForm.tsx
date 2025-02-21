'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import Link from 'next/link';
import { config } from '@/config';

const schema = z.object({
  orgName: z.string().min(1, "Let's start with your organization's name"),
  contactName: z.string().min(1, "We'd love to know your name"),
  email: z.string().email("Oops! That email doesn't look quite right"),
  phone: z.string().min(10, "A bit short for a phone number, isn't it?"),
  website: z
    .string()
    .regex(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/,
      'Please enter a valid website URL'
    )
    .or(z.literal('')),
  message: z.string().min(10, 'Mind sharing a bit more in your message?'),
});

type FormData = z.infer<typeof schema>;

export function SponsorForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmitForm = async (data: FormData) => {
    try {
      if (!config.SPONSOR_FORM_URL) {
        setError('Form submission failed. Please try again later.');
        return;
      }
      const response = await fetch(config.SPONSOR_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'Organisation Name': data.orgName,
          Name: data.contactName,
          'Phone Number': data.phone,
          'Email Address': data.email,
          Website: data.website,
          Message: data.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Form submission failed. Please try again later.');
      }
    } catch {
      setError('An error occurred. Please try again later.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto mb-12 text-center">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Thank You!</h2>
        <p className="text-gray-300">
          We appreciate your interest in sponsoring AI Days 2025. We&apos;ll be in touch with you
          soon.
        </p>
      </div>
    );
  }

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
        <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
          Website (optional)
        </label>
        <input
          {...register('website')}
          type="text"
          id="website"
          placeholder="Enter your website URL"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Additional Details
        </label>
        <textarea
          {...register('message')}
          id="message"
          placeholder="Please provide any additional details about your sponsorship interests"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-yellow-500 text-black rounded-full text-base md:text-lg font-semibold hover:bg-yellow-600 transition-all duration-300"
      >
        Submit
      </button>
      {error && (
        <div className="mt-4 text-center">
          <p className="text-red-500 mb-2">{error}</p>
          <p className="text-gray-300">
            If you continue to experience issues, please reach out to us directly at{' '}
            <Link href="mailto:hello@aidays.io" className="text-yellow-500 hover:underline">
              hello@aidays.io
            </Link>
          </p>
        </div>
      )}
    </form>
  );
}
