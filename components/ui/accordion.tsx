"use client"

import { useState, useRef } from "react"

type AccordionItem = {
  title: React.ReactNode
  content: React.ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [openHeight, setOpenHeight] = useState(0)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
      return
    }
    setOpenHeight(contentRefs.current[index]?.scrollHeight ?? 0)
    setOpenIndex(index)
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl border border-black/10 text-black dark:bg-[#1a1a1a] dark:border-white/10 dark:text-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            className={`p-6 transition-all ${
              index !== items.length - 1 ? "border-b border-black/10 dark:border-white/10" : ""
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="cursor-pointer group w-full flex items-center justify-between"
            >
              {item.title}
              <div className="text-black p-2 rounded-full group-hover:bg-black/5 transition-colors duration-300 dark:text-white dark:group-hover:bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 transition-transform duration-500 ease-in-out ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </button>
            <div
              ref={(el) => {
                contentRefs.current[index] = el
              }}
              style={{
                maxHeight: isOpen ? openHeight : 0,
              }}
              className="transition-all duration-500 ease-in-out overflow-hidden"
            >
              <div className="mt-4 text-black/80 dark:text-white/80">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
