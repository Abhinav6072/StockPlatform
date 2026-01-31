import Link from "next/link";

const steps = [
  { num: "1", title: "Inception", desc: "Define your trading strategy and goals." },
  { num: "2", title: "Access", desc: "Get access to our algo trading platform." },
  { num: "3", title: "Build Strategy", desc: "Create and customize your algorithms." },
  { num: "4", title: "Strategy Testing", desc: "Backtest and validate your strategy." },
  { num: "5", title: "Approval", desc: "Get approval and go live." },
];

export const metadata = {
  title: "Algo Trading | Findoc",
  description: "Algorithmic trading for rapid, efficient trades. Build, test, and deploy strategies with Findoc.",
};

export default function AlgoTradingPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Algo <span className="gradient-text">Trading</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400">
          A rapidly emerging technology for traders. It uses optimized algorithms to enable
          rapid trades, far beyond manual capabilities. In the stock market, where every
          microsecond counts, the speed and efficiency of Algo trading are crucial for
          investors.
        </p>
        <p className="mt-4 text-slate-400">
          As high as 60% of volumes are traded by algo trading. It&apos;s the future.
        </p>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white">5 Key Steps</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-slate-600/50 bg-slate-800/50 p-6"
              >
                <span className="text-3xl font-bold text-blue-400">{step.num}</span>
                <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/open-demat-account-online"
            className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Get Started with Algo Trading
          </Link>
        </div>
      </div>
    </div>
  );
}
