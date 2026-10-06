import { useId } from "react"

type InputProps = {
  label: string
  value: string
  onChange: (val: string) => void
  type?: string
  name?: string
  required?: boolean
}

export default function Input({
  label,
  value,
  onChange,
  type = "text",
  name,
  required = false,
}: InputProps) {
  const id = useId()

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className={`
          peer w-full h-12 rounded-full border border-black/20 bg-white text-black
          px-6 placeholder-transparent
          focus:border-black transition-colors duration-100 ease-in
          focus:outline-none
          dark:border-white/20 dark:bg-[#1a1a1a] dark:text-white dark:focus:border-white
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-6 top-1/2 -translate-y-1/2 text-black bg-white rounded-xl px-1
          pointer-events-none
          transform origin-left transition-all duration-100 ease-in
          peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base
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
