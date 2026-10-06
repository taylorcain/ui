"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import ContentSheet from "@/components/content-sheet";

export type DocTab = {
  label: string;
  content: React.ReactNode;
};

export default function DocTabs({ tabs }: { tabs: DocTab[] }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hasPlaced = useRef(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const highlightIndex = hovered ?? activeTabIndex;

  const measure = useCallback((index: number) => {
    const list = listRef.current;
    const button = buttonRefs.current[index];
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
    const box = measure(highlightIndex);
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
      const next = measure(highlightIndex);
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
  }, [highlightIndex, measure]);

  return (
    <ContentSheet className="mt-8">
      <div className="mb-8 flex justify-center" role="tablist" aria-label="Component details">
        <div
          ref={listRef}
          className="relative inline-flex"
          onMouseLeave={() => setHovered(null)}
        >
          <div
            ref={indicatorRef}
            aria-hidden
            className="pointer-events-none absolute top-0 rounded-full bg-black/[0.06] opacity-0 dark:bg-white/[0.10]"
          />
          {tabs.map((tab, index) => {
            const selected = activeTabIndex === index;
            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={selected}
                ref={(node) => {
                  buttonRefs.current[index] = node;
                }}
                onClick={() => setActiveTabIndex(index)}
                onMouseEnter={() => setHovered(index)}
                className="relative z-10 cursor-pointer rounded-full px-5 py-2 text-sm font-medium text-black dark:text-white"
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      <div role="tabpanel">{tabs[activeTabIndex].content}</div>
    </ContentSheet>
  );
}
