"use client";

import { useState } from "react";
import ComingSoonModal from "./ComingSoonModal";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ComingSoonButton({ children, className }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}
      </button>
      <ComingSoonModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
