import Link from "next/link";

export const metadata = {
  title: "Foreign Portfolio Investment (FPI) | Findoc",
  description: "Invest in India — a land of billion opportunities. FPI with Findoc.",
};

export default function FPIPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Invest in India — <span className="gradient-text">A Land of Billion Opportunities</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400">
          Now is the best time to invest in India. Foreign Portfolio Investment (FPI) allows
          international investors to participate in Indian equity and debt markets. Act now
          and head higher.
        </p>
        <ul className="mt-8 space-y-3 text-slate-400">
          <li>• Access Indian equity and debt markets</li>
          <li>• Compliant FPI registration support</li>
          <li>• Dedicated relationship manager</li>
          <li>• Seamless fund flow and reporting</li>
        </ul>
        <div className="mt-16 text-center">
          <Link
            href="/open-demat-account-online"
            className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}
