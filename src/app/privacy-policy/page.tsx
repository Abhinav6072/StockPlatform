import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Findoc",
  description: "Privacy Policy for Findoc trading and investing platform.",
};

export default function PrivacyPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-400">Last updated: January 2025</p>

        <div className="mt-12 space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
            <p className="mt-2">
              We collect information you provide when opening an account, using our
              services, or contacting us. This may include name, email, phone number,
              address, KYC documents, and financial information as required by law.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
            <p className="mt-2">
              We use your information to provide and improve our services, comply with
              legal and regulatory requirements, send notifications (including SMS and
              promotional content as authorized by you), and for security and fraud
              prevention.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">3. Sharing of Information</h2>
            <p className="mt-2">
              We may share your information with regulators, depositories, exchanges,
              and service providers as required for providing our services and complying
              with law. We do not sell your personal information to third parties for
              marketing.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">4. Data Security</h2>
            <p className="mt-2">
              We implement appropriate technical and organizational measures to protect
              your personal data against unauthorized access, alteration, or destruction.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">5. Your Rights</h2>
            <p className="mt-2">
              You may request access, correction, or deletion of your personal data
              subject to legal and regulatory retention requirements. You may opt out of
              promotional communications.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">6. Contact</h2>
            <p className="mt-2">
              For privacy-related queries, please contact us through our website or
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
