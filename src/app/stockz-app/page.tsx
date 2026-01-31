import Link from "next/link";

export const metadata = {
  title: "Stockz App | Findoc",
  description: "One platform for all your investments. Fast, secure & easy trading at your fingertips.",
};

export default function StockzAppPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          One Platform for All <span className="gradient-text">Your Investments</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400">
          Fast, Secure, & Easy Trading at Your Fingertips. Stockz is our mobile and web app
          that brings stocks, IPOs, mutual funds, and more in one place.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl border border-slate-600/50 bg-slate-800/50 px-6 py-4 text-white transition hover:bg-slate-700/50"
          >
            <span className="text-2xl">📱</span>
            <div className="text-left">
              <span className="block text-sm text-slate-400">Get it on</span>
              <span className="font-semibold">Google Play</span>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl border border-slate-600/50 bg-slate-800/50 px-6 py-4 text-white transition hover:bg-slate-700/50"
          >
            <span className="text-2xl">🍎</span>
            <div className="text-left">
              <span className="block text-sm text-slate-400">Download on the</span>
              <span className="font-semibold">App Store</span>
            </div>
          </a>
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/open-demat-account-online"
            className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
