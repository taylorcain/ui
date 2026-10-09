"use client"

import { useState } from "react"

export default function Switch() {
  const [checked, setChecked] = useState(false)

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      className={`relative h-[16px] w-[28px] shrink-0 cursor-pointer rounded-full p-[2px] transition-colors ${
        checked ? "bg-black dark:bg-white" : "bg-[#e5e5ea] dark:bg-white/20"
      }`}
    >
      <span
        className={`block h-full aspect-square rounded-full bg-white transition-[translate] duration-200 ease-out dark:bg-charcoal ${
          checked ? "translate-x-[12px]" : "translate-x-0"
        }`}
      />
    </button>
  )
}
