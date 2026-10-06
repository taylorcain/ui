"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

type LegalView = "license" | "privacy";

const LEGAL_TABS: { id: LegalView; label: string; href: string }[] = [
  { id: "license", label: "License", href: "/license" },
  { id: "privacy", label: "Privacy", href: "/privacy" },
];

export default function LegalToggle({ view }: { view: LegalView }) {
  const listRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Partial<Record<LegalView, HTMLAnchorElement | null>>>({});
  const hasPlaced = useRef(false);
  const [hovered, setHovered] = useState<LegalView | null>(null);
  const highlightId = hovered ?? view;

  const measure = useCallback((id: LegalView) => {
    const list = listRef.current;
    const button = buttonRefs.current[id];
    if (!list || !button) return null;
    const listRect = list.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    return {
      left: buttonRect.left - listRect.left,
      width: buttonRect.width,
      height: buttonRect.height,
    };
  }, []);

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    const box = measure(highlightId);
    if (!indicator || !box) return;

    const place = (animate: boolean) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      indicator.style.transition =
        animate && !reduce ? "left 200ms ease-out, width 200ms ease-out, height 200ms ease-out" : "none";
      indicator.style.left = `${box.left}px`;
      indicator.style.width = `${box.width}px`;
      indicator.style.height = `${box.height}px`;
      indicator.style.opacity = "1";
    };

    place(hasPlaced.current);
    hasPlaced.current = true;

    const frame = requestAnimationFrame(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        indicator.style.transition = "left 200ms ease-out, width 200ms ease-out, height 200ms ease-out";
      }
    });

    const onResize = () => {
      const next = measure(highlightId);
      if (!next) return;
      indicator.style.transition = "none";
      indicator.style.left = `${next.left}px`;
      indicator.style.width = `${next.width}px`;
      indicator.style.height = `${next.height}px`;
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, [highlightId, measure]);

  return (
    <div className="flex justify-center">
      <div ref={listRef} className="relative inline-flex" onMouseLeave={() => setHovered(null)}>
        <div
          ref={indicatorRef}
          aria-hidden
          className="pointer-events-none absolute top-0 rounded-full bg-black/[0.06] opacity-0 dark:bg-white/[0.10]"
        />
        {LEGAL_TABS.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            ref={(node) => {
              buttonRefs.current[tab.id] = node;
            }}
            aria-current={view === tab.id ? "page" : undefined}
            onMouseEnter={() => setHovered(tab.id)}
            className="relative z-10 rounded-full px-5 py-2 text-sm font-medium text-black dark:text-white"
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
