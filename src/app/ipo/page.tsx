import Link from "next/link";

export const metadata = {
  title: "IPO | Findoc",
  description: "Apply for IPOs and invest in India's best companies with Findoc.",
};

export default function IPOPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          IPO <span className="gradient-text">Investments</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400">
          Apply for Initial Public Offerings (IPOs) and grow with India&apos;s best
          companies. Get access to new listings, track upcoming IPOs, and apply seamlessly
          through our platform.
        </p>
        <ul className="mt-8 space-y-3 text-slate-400">
          <li>• Apply for IPOs in a few clicks</li>
          <li>• Track upcoming and live IPOs</li>
          <li>• UPI-based application process</li>
          <li>• Notifications for new listings</li>
        </ul>
        <div className="mt-16 text-center">
          <Link
            href="/open-demat-account-online"
            className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Open Demat Account for IPO
          </Link>
        </div>
      </div>
    </div>
  );
}
