"use client";

import { useState } from "react";
import Link from "next/link";
import ThankYouModal from "@/components/ThankYouModal";
import ComingSoonButton from "@/components/ComingSoonButton";

export default function OpenDematPage() {
  const [agreed, setAgreed] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setThankYouOpen(true);
  };

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Open your <span className="gradient-text">Demat Account</span> in minutes
        </h1>
        <p className="mt-4 text-slate-400">
          Fill in your details and we&apos;ll help you get started.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
              Mobile Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="10-digit mobile number"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              id="terms"
              type="checkbox"
              required
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-slate-400">
              I agree to the{" "}
              <Link href="/terms-and-condition" className="text-blue-400 hover:underline">
                Terms & Conditions
              </Link>{" "}
              and confirm that I have read the{" "}
              <Link href="/privacy-policy" className="text-blue-400 hover:underline">
                Privacy Policy
              </Link>
              . I authorize the sending of notifications via SMS, messages, promotional, and
              informational content.
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Get Started
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Or{" "}
          <ComingSoonButton className="text-blue-400 hover:underline">
            open Demat via app (Coming soon)
          </ComingSoonButton>
        </p>
      </div>
      <ThankYouModal open={thankYouOpen} onClose={() => setThankYouOpen(false)} />
    </div>
  );
}
