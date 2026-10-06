"use client"

import { useState } from "react"

type RadioGroupProps = {
  options: string[]
  value?: string
  onChange?: (val: string) => void
  name?: string
}

export default function RadioGroup({
  options,
  value,
  onChange,
  name = "radio-group",
}: RadioGroupProps) {
  const [selected, setSelected] = useState(value ?? options[0])

  const handleSelect = (option: string) => {
    setSelected(option)
    onChange?.(option)
  }

  return (
    <div className="flex flex-col md:flex-row gap-3">
      {options.map((option) => {
        const isSelected = selected === option
        return (
          <label
            key={option}
            className={`flex-1 cursor-pointer flex items-center gap-3 rounded-xl px-5 py-4 border transition-all duration-200
              ${
                isSelected
                  ? "border-black bg-white dark:border-white dark:bg-[#1a1a1a]"
                  : "border-gray-200 bg-white hover:border-gray-300 dark:border-white/15 dark:bg-[#1a1a1a] dark:hover:border-white/30"
              }
            `}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={isSelected}
              onChange={() => handleSelect(option)}
              className="hidden"
            />
            <span
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-200
                ${
                  isSelected
                    ? "border-black bg-black dark:border-white dark:bg-white"
                    : "border-gray-300 dark:border-white/30"
                }
              `}
            >
              {isSelected && (
                <span className="w-2 h-2 rounded-full bg-white dark:bg-[#1a1a1a]" />
              )}
            </span>
            <span className="text-base font-normal text-gray-800 dark:text-white">{option}</span>
          </label>
        )
      })}
    </div>
  )
}
