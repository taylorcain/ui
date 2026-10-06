import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPreview } from "@/components/previews";
import { components, getComponent, type ComponentSlug } from "@/lib/components";

export function generateStaticParams() {
  return components.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponent(slug);
  if (!component) return {};
  return { title: `${component.name} preview` };
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponent(slug);
  if (!component) notFound();

  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center p-6 sm:p-10">
      <div className="w-full max-w-[1120px]">
        <DocPreview slug={component.slug as ComponentSlug} standalone />
      </div>
    </main>
  );
}
