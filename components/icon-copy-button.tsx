"use client";

import { useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number };

export default function IconCopyButton({
  label,
  copiedLabel = "Copied!",
  copied,
  onClick,
}: {
  label: string;
  copiedLabel?: string;
  copied: boolean;
  onClick: () => void;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const rippleId = useRef(0);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const id = ++rippleId.current;
      setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 560);
    }
    onClick();
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={handleClick}
      className="btn-scale relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black/[0.06] px-2 py-1 text-xs text-black/80 dark:bg-white/[0.10] dark:text-white/80"
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="copy-btn-ripple"
          style={{ left: r.x, top: r.y }}
          aria-hidden
        />
      ))}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}
