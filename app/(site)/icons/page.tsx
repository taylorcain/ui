import type { Metadata } from "next";
import Catalog from "@/components/catalog";

export const metadata: Metadata = {
  title: "Icons",
  description: "Beautifully crafted SVG and JSX icons, designed to drop seamlessly into your projects.",
};

export default function IconsPage() {
  return <Catalog view="icons" />;
}
