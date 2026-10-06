export default function SiteFooter() {
  return (
    <footer className="py-16 text-center text-xs text-black dark:text-white">
      © {new Date().getFullYear()} UI Library. All rights reserved.
    </footer>
  );
}
