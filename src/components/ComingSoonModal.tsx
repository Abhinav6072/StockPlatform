"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ComingSoonModal({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Coming soon"
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-slate-600 bg-slate-800 p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-white">Coming soon</h3>
        <p className="mt-2 text-slate-400">
          We&apos;re working on this feature. Stay tuned!
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-500"
        >
          OK
        </button>
      </div>
    </div>
  );
}
