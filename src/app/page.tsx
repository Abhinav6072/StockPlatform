import Link from "next/link";
import ComingSoonButton from "@/components/ComingSoonButton";

const services = [
  {
    href: "/algo-trading",
    title: "Algo Trading",
    subtitle: "It's the future. As high as 60% volumes are traded by algo trading.",
    icon: "⚡",
  },
  {
    href: "/ipo",
    title: "IPO",
    subtitle: "Apply for IPOs and grow with India's best companies.",
    icon: "📈",
  },
  {
    href: "/foreign-portfolio-investment",
    title: "Foreign Portfolio Investment (FPI)",
    subtitle: "Invest in India — a land of billion opportunities.",
    icon: "🌍",
  },
  {
    href: "/stockz-app",
    title: "Stockz",
    subtitle: "Fast, secure & easy trading at your fingertips.",
    icon: "📱",
  },
];

const learnLinks = [
  { href: "/learn", label: "Knowledge Center" },
  { href: "/learn#blog", label: "Blogs" },
  { href: "/learn#research", label: "Findoc Prime" },
  { href: "/learn#media", label: "Media" },
  { href: "/learn#events", label: "Events" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Gateway to{" "}
            <span className="gradient-text">Smart Investments</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            All Your Investment Needs in One Place: Stocks, IPOs, Commodities,
            Derivatives, Futures, Options, Mutual Funds, and Sovereign Gold Bonds.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ComingSoonButton className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-500">
              Get Started
            </ComingSoonButton>
            <Link
              href="/learn"
              className="rounded-full border border-slate-500 bg-slate-800/50 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700/50"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            By clicking &quot;Get Started,&quot; you agree to our{" "}
            <Link href="/terms-and-condition" className="text-slate-400 underline hover:text-white">
              Terms & Conditions
            </Link>
            , and confirm you have read our{" "}
            <Link href="/privacy-policy" className="text-slate-400 underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-t border-slate-700/50 bg-slate-900/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 transition hover:border-blue-500/50 hover:bg-slate-800"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-blue-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{service.subtitle}</p>
                <span className="mt-4 inline-block text-sm font-medium text-blue-400 group-hover:underline">
                  Know More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative solutions */}
      <section className="border-t border-slate-700/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Innovative Solutions For Your{" "}
            <span className="gradient-text">Financial Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            From algo trading to FPI, we bring you the tools to invest with confidence.
          </p>
        </div>
      </section>

      {/* Learn with Findoc */}
      <section className="border-t border-slate-700/50 bg-slate-900/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Learn with Findoc
              </h2>
              <p className="mt-4 text-slate-400">
                Our immersive, 360-degree approach equips you with the necessary knowledge,
                skills, and tools, enabling you to trade and invest confidently in the
                financial markets.
              </p>
              <ul className="mt-6 space-y-2">
                {learnLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-400 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["Knowledge Center", "Blogs", "Findoc Prime", "Media", "Events"].slice(0, 4).map((label, i) => (
                <div
                  key={label}
                  className="h-32 w-40 rounded-xl border border-slate-600/50 bg-slate-800/50 p-4 text-center"
                >
                  <span className="text-2xl">{["📚", "✍️", "📰", "🎬"][i]}</span>
                  <p className="mt-2 text-sm font-medium text-white">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Demat */}
      <section className="border-t border-slate-700/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-gradient-to-br from-blue-900/50 to-slate-800 border border-slate-600/50 p-8 sm:p-12 lg:p-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Don&apos;t miss out on the ultimate destination for all your investments,
              where your wealth knows no limits!
            </h2>
            <p className="mt-4 text-slate-300">
              Open your Demat Account in minutes.
            </p>
            <ComingSoonButton className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500">
              Get Started Now
            </ComingSoonButton>
          </div>
        </div>
      </section>
    </div>
  );
}
