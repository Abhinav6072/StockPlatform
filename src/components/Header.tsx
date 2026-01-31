"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import ComingSoonModal from "./ComingSoonModal";

const navLinks = [
  { href: "/algo-trading", label: "Algo Trading" },
  { href: "/ipo", label: "IPO" },
  { href: "/foreign-portfolio-investment", label: "FPI" },
  { href: "/stockz-app", label: "Stockz" },
  { href: "/learn", label: "Learn" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const { data: session, status } = useSession();

  const openComingSoon = () => {
    setComingSoonOpen(true);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-white">
              findoc
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {status === "loading" ? (
              <span className="text-sm text-slate-500">…</span>
            ) : session ? (
              <>
                <Link
                  href="/dashboard"
                  className="hidden rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white sm:inline-block"
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="hidden rounded-full bg-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-600 sm:inline-block"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden text-sm font-medium text-slate-300 transition hover:text-white sm:inline-block"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 sm:inline-block"
                >
                  Sign up
                </Link>
              </>
            )}
            <button
              type="button"
              onClick={openComingSoon}
              className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:inline-block"
            >
              Get Started
            </button>
            <button
              type="button"
              className="rounded p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-700/50 bg-slate-900 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {session ? (
                <>
                  <Link
                    href="/dashboard"
                    className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="rounded-lg px-3 py-2 text-left text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign up
                  </Link>
                </>
              )}
              <button
                type="button"
                onClick={openComingSoon}
                className="mt-2 rounded-lg bg-blue-600 px-3 py-2 text-center font-semibold text-white hover:bg-blue-500"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>
      <ComingSoonModal open={comingSoonOpen} onClose={() => setComingSoonOpen(false)} />
    </>
  );
}
