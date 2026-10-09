import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function SiteHeader({ isDark = false }: { isDark?: boolean }) {
  return (
    <header className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-6 py-5">
      <Link href="/" className="font-geist-medium flex items-center gap-2 text-black dark:text-white">
        <span className="flex size-7 items-center justify-center rounded-[9px] bg-black text-[1.125rem] leading-none tracking-normal text-white dark:bg-white dark:text-black">
          UI
        </span>
        <span className="text-[1.125rem] leading-none tracking-[-0.03em]">Library</span>
      </Link>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/taylorcain/ui"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="UI Library on GitHub"
          className="cursor-pointer p-2 text-black transition-all duration-300 hover:scale-90 dark:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M12.01.2C5.37.2,0,5.61,0,12.3c0,5.35,3.44,9.88,8.21,11.48.6.12.82-.26.82-.58,0-.28-.02-1.24-.02-2.24-3.34.72-4.04-1.44-4.04-1.44-.54-1.4-1.33-1.76-1.33-1.76-1.09-.74.08-.74.08-.74,1.21.08,1.85,1.24,1.85,1.24,1.07,1.84,2.8,1.32,3.5,1,.1-.78.42-1.32.76-1.62-2.66-.28-5.47-1.32-5.47-5.97,0-1.32.48-2.4,1.23-3.24-.12-.3-.54-1.54.12-3.21,0,0,1.01-.32,3.3,1.24.98-.26,1.99-.4,3-.4,1.01,0,2.05.14,3,.4,2.29-1.56,3.3-1.24,3.3-1.24.66,1.66.24,2.9.12,3.21.78.84,1.23,1.92,1.23,3.24,0,4.65-2.8,5.67-5.49,5.97.44.38.82,1.1.82,2.24,0,1.62-.02,2.92-.02,3.33,0,.32.22.7.82.58,4.77-1.6,8.21-6.13,8.21-11.48.02-6.69-5.37-12.1-11.99-12.1Z" />
          </svg>
        </a>
        <ThemeToggle initialDark={isDark} />
      </div>
    </header>
  );
}
