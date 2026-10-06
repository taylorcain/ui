"use client"

import Link from "next/link"
import { useRef, useState } from "react"

type Ripple = { id: number; x: number; y: number }

type ButtonRippleProps = {
  children: React.ReactNode
  href?: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  className?: string
}

const baseClasses =
  "btn-scale relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black/5 px-6 py-2 text-black transition-all duration-300 hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"

export default function ButtonRipple({
  children,
  href,
  type = "button",
  onClick,
  className = "",
}: ButtonRippleProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const rippleId = useRef(0)
  const [ripples, setRipples] = useState<Ripple[]>([])

  const addRipple = (e: React.MouseEvent<HTMLElement>) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const id = ++rippleId.current
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }])
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 560)
  }

  const rippleNodes = ripples.map((r) => (
    <span
      key={r.id}
      className="copy-btn-ripple"
      style={{ left: r.x, top: r.y }}
      aria-hidden
    />
  ))

  if (href) {
    return (
      <Link
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={(e) => {
          addRipple(e)
          onClick?.()
        }}
        className={`${baseClasses} ${className}`}
      >
        {rippleNodes}
        <span>{children}</span>
      </Link>
    )
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={(e) => {
        addRipple(e)
        onClick?.()
      }}
      className={`${baseClasses} ${className}`}
    >
      {rippleNodes}
      <span>{children}</span>
    </button>
  )
}
