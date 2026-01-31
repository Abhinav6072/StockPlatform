import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login?callbackUrl=/dashboard");

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <p className="mt-2 text-slate-400">
        Welcome back, {session.user.name ?? session.user.email}.
      </p>
      <div className="mt-8 rounded-xl border border-slate-600/50 bg-slate-800/50 p-6">
        <p className="text-slate-300">
          <span className="font-medium text-white">Email:</span> {session.user.email}
        </p>
        {session.user.name && (
          <p className="mt-2 text-slate-300">
            <span className="font-medium text-white">Name:</span> {session.user.name}
          </p>
        )}
      </div>
      <div className="mt-8">
        <Link
          href="/"
          className="text-blue-400 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
