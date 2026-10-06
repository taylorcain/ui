import Link from "next/link"

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  href,
  type = 'button',
  onClick,
  className = '',
}: ButtonProps) {
  const baseClasses =
    'cursor-pointer inline-block py-2 px-6 rounded-full bg-black/5 hover:bg-black/10 text-black transition-all duration-300 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white';

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}
