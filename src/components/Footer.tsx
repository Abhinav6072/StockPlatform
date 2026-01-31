import Link from "next/link";

const footerLinks = {
  products: [
    { href: "/algo-trading", label: "Algo Trading" },
    { href: "/ipo", label: "IPO" },
    { href: "/foreign-portfolio-investment", label: "FPI" },
    { href: "/stockz-app", label: "Stockz" },
  ],
  learn: [
    { href: "/learn", label: "Knowledge Center" },
    { href: "/learn#blog", label: "Blogs" },
    { href: "/learn#research", label: "Findoc Prime" },
    { href: "/learn#media", label: "Media" },
    { href: "/learn#events", label: "Events" },
  ],
  legal: [
    { href: "/terms-and-condition", label: "Terms & Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              findoc
            </Link>
            <p className="mt-3 text-sm text-slate-400">
              Your Gateway to Smart Investments. All your investment needs in one place.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Products
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Learn
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700/50 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Findoc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
