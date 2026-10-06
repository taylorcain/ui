import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComponentView from "@/components/component-view";
import { components, getComponent, type ComponentSlug } from "@/lib/components";
import { getCodeFromFile } from "@/lib/load-code";

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
  return { title: component.name };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponent(slug);
  if (!component) notFound();

  const code = getCodeFromFile(component.codePath);
  const usage = getCodeFromFile(component.usagePath);

  return (
    <ComponentView
      name={component.name}
      slug={component.slug as ComponentSlug}
      code={code}
      usage={usage}
    />
  );
}
