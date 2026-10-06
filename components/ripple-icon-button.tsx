"use client";

import { useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number };

const baseClassName =
  "btn-scale relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full p-2 text-black transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/10";

export default function RippleIconButton({
  children,
  ariaLabel,
  className = "",
  href,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
}) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const rippleId = useRef(0);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (event: React.MouseEvent<HTMLElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const id = ++rippleId.current;
    setRipples((prev) => [...prev, { id, x: event.clientX - rect.left, y: event.clientY - rect.top }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 560);
  };

  const rippleNodes = ripples.map((r) => (
    <span
      key={r.id}
      className="copy-btn-ripple"
      style={{ left: r.x, top: r.y }}
      aria-hidden
    />
  ));

  if (href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onClick={(event) => {
          addRipple(event);
          onClick?.(event);
        }}
        className={`${baseClassName} ${className}`}
      >
        {rippleNodes}
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      type={type}
      aria-label={ariaLabel}
      onClick={(event) => {
        addRipple(event);
        onClick?.(event);
      }}
      className={`${baseClassName} ${className}`}
    >
      {rippleNodes}
      {children}
    </button>
  );
}
