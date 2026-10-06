import { useId } from "react"

type TextareaProps = {
  label: string
  value: string
  onChange: (val: string) => void
  name?: string
  required?: boolean
  rows?: number
}

export default function Textarea({
  label,
  value,
  onChange,
  name,
  required = false,
  rows = 4,
}: TextareaProps) {
  const id = useId()

  return (
    <div className="relative w-full">
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className={`
          peer w-full rounded-xl border border-black/20 bg-white text-black
          px-6 pt-5 pb-2 placeholder-transparent resize-none
          focus:border-black transition-colors duration-100 ease-in
          focus:outline-none
          dark:border-white/20 dark:bg-[#1a1a1a] dark:text-white dark:focus:border-white
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-6 top-5 text-black bg-white px-1 rounded-md
          pointer-events-none
          transform origin-left transition-all duration-100 ease-in
          peer-placeholder-shown:top-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base
          peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:text-black
          dark:text-white dark:bg-[#1a1a1a] dark:peer-focus:text-white
        `}
      >
        {label}
        {required && <span className="text-black dark:text-white">*</span>}
      </label>
    </div>
  )
}
