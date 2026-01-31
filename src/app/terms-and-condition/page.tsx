import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Findoc",
  description: "Terms and Conditions for Findoc trading and investing platform.",
};

export default function TermsPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-slate-400">Last updated: January 2025</p>

        <div className="mt-12 space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using the Findoc platform, you agree to be bound by these
              Terms and Conditions. If you do not agree, please do not use our services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">2. Services</h2>
            <p className="mt-2">
              Findoc provides online trading, stock broking, and investment services
              including but not limited to equity trading, IPOs, algo trading, mutual
              funds, and demat account services in India.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">3. Eligibility</h2>
            <p className="mt-2">
              You must be at least 18 years of age and legally capable of entering into
              contracts to use our services. You must comply with all applicable laws and
              regulations in your jurisdiction.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">4. Account & KYC</h2>
            <p className="mt-2">
              Opening a demat/trading account requires completion of KYC (Know Your
              Customer) as per SEBI and regulatory requirements. You are responsible for
              providing accurate information and keeping your account secure.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">5. Risk Disclosure</h2>
            <p className="mt-2">
              Trading and investing in securities involve risk. Past performance is not
              indicative of future results. You should only invest what you can afford to
              lose and seek independent advice if needed.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">6. Contact</h2>
            <p className="mt-2">
              For questions about these terms, please contact us through our website or
              support channels.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
