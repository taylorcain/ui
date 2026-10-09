import { useId } from "react"

type InputLineProps = {
  label: string
  value: string
  onChange: (val: string) => void
  type?: string
  name?: string
  required?: boolean
}

export default function InputLine({
  label,
  value,
  onChange,
  type = "text",
  name,
  required = false,
}: InputLineProps) {
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
          peer w-full h-12 rounded-none border-0 border-b border-black/20 bg-transparent text-black
          px-0 placeholder-transparent
          focus:border-black transition-colors duration-100 ease-in
          focus:outline-none
          dark:border-white/20 dark:text-white dark:focus:border-white
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 text-black bg-transparent px-0
          pointer-events-none
          transform origin-left transition-all duration-100 ease-in
          peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base
          peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:text-black
          dark:text-white dark:peer-focus:text-white
        `}
      >
        {label}
        {required && <span className="text-black dark:text-white">*</span>}
      </label>
    </div>
  )
}
