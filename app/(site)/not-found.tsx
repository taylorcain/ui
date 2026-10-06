import Link from "next/link";
import ContentSheet from "@/components/content-sheet";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-[1120px] px-6 pt-16">
        <h1 className="text-2xl font-medium tracking-tight sm:text-4xl">Page not found</h1>
      </div>
      <ContentSheet>
        <Link href="/" className="text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
          Back to components
        </Link>
      </ContentSheet>
    </div>
  );
}
