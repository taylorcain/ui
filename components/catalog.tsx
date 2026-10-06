"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import ContentSheet from "@/components/content-sheet";
import Icons from "@/components/icons";
import { CardPreview } from "@/components/previews";
import { components } from "@/lib/components";

type CatalogView = "components" | "icons";

const VIEW_TABS: { id: CatalogView; label: string; href: string }[] = [
  { id: "components", label: "Components", href: "/" },
  { id: "icons", label: "Icons", href: "/icons" },
];

function ViewToggle({ view }: { view: CatalogView }) {
  const listRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Partial<Record<CatalogView, HTMLAnchorElement | null>>>({});
  const hasPlaced = useRef(false);
  const [hovered, setHovered] = useState<CatalogView | null>(null);
  const highlightId = hovered ?? view;

  const measure = useCallback((id: CatalogView) => {
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
    <div ref={listRef} className="relative inline-flex shrink-0" onMouseLeave={() => setHovered(null)}>
      <div
        ref={indicatorRef}
        aria-hidden
        className="pointer-events-none absolute top-0 rounded-full bg-black/[0.06] opacity-0 dark:bg-white/[0.10]"
      />
      {VIEW_TABS.map((tab) => (
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
  );
}

export default function Catalog({ view }: { view: "components" | "icons" }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return components;
    return components.filter((item) => item.name.toLowerCase().includes(needle));
  }, [query]);

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-[1120px] px-6 pt-14 pb-8 sm:pt-16 sm:pb-10">
        <h1 className="mx-auto max-w-[24em] text-center text-[1.7rem] leading-[1.12] font-medium tracking-[-0.05em] text-black sm:text-[2.5rem] dark:text-white">
          Open source React and Tailwind CSS UI components, designed to kickstart your next project.
        </h1>
      </div>

      <ContentSheet>
      <div className="flex h-14 items-center gap-3 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          className="size-5 shrink-0 text-black dark:text-white"
          aria-hidden
        >
          <path d="M18.8 11.28a7.52 7.52 0 1 1-15.04 0 7.52 7.52 0 0 1 15.04 0M16.6 16.6 20.56 20.56" />
        </svg>
        <label className="sr-only" htmlFor="catalog-search">
          Search
        </label>
        <input
          id="catalog-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
          className="h-full min-w-0 flex-1 bg-transparent text-sm leading-5 font-medium text-black outline-none placeholder:text-sm placeholder:leading-5 placeholder:font-medium placeholder:text-black dark:text-white dark:placeholder:text-white"
        />
        <ViewToggle view={view} />
      </div>

      {view === "components" ? (
        filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="group/card block">
                <div className="relative h-[220px] overflow-hidden rounded-2xl bg-white dark:bg-[#1a1a1a]">
                  <CardPreview slug={item.slug} />
                </div>
                <p className="mt-3 text-sm font-medium text-black/45 transition-colors group-hover/card:text-black/75 dark:text-white/45 dark:group-hover/card:text-white/75">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-sm text-black/45 dark:text-white/45">No components match that search.</p>
        )
      ) : (
        <div className="mt-8">
          <Icons query={query} showSearch={false} />
        </div>
      )}
      </ContentSheet>
    </div>
  );
}
