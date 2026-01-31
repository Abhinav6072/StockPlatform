import Link from "next/link";

const sections = [
  { id: "knowledge", title: "Knowledge Center", desc: "Learn the basics and advanced concepts of trading and investing.", icon: "📚" },
  { id: "blog", title: "Blogs", desc: "Insights, market updates, and expert opinions.", icon: "✍️" },
  { id: "research", title: "Findoc Prime", desc: "Weekly newspaper and research for informed decisions.", icon: "📰" },
  { id: "media", title: "Media", desc: "Videos, press releases, and media coverage.", icon: "🎬" },
  { id: "events", title: "Events", desc: "Webinars, workshops, and Traders for Life events.", icon: "🎯" },
];

export const metadata = {
  title: "Learn | Findoc",
  description: "Knowledge Center, Blogs, Findoc Prime, Media & Events. Learn to trade and invest confidently.",
};

export default function LearnPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Learn with <span className="gradient-text">Findoc</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400">
          Our immersive, 360-degree approach equips you with the necessary knowledge, skills,
          and tools, enabling you to trade and invest confidently in the financial markets.
        </p>

        <div className="mt-16 space-y-8">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-2xl border border-slate-600/50 bg-slate-800/50 p-8"
            >
              <span className="text-4xl">{section.icon}</span>
              <h2 className="mt-4 text-2xl font-bold text-white">{section.title}</h2>
              <p className="mt-2 text-slate-400">{section.desc}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/open-demat-account-online"
            className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Open Demat Account
          </Link>
        </div>
      </div>
    </div>
  );
}
