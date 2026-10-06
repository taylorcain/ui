"use client"

import { useState } from "react"

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label
      htmlFor="custom-checkbox"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-black/10 text-black cursor-pointer transition-colors duration-200 dark:border-white/15 dark:text-white"
    >
      <input
        id="custom-checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="sr-only"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        fill="none"
        className={`size-6 transition-opacity duration-150 ${checked ? "opacity-100" : "opacity-0"}`}
        aria-hidden
      >
        <polyline
          strokeLinecap="round"
          strokeLinejoin="round"
          points="6.36 12.3 10.93 17.53 18.84 5.75"
        />
      </svg>
    </label>
  );
}
