import CodePreview from "@/components/code-preview";
import DocTabs from "@/components/doc-tabs";
import { DocPreview } from "@/components/previews";
import type { ComponentSlug } from "@/lib/components";

export default function ComponentView({
  name,
  slug,
  code,
  usage,
}: {
  name: string;
  slug: ComponentSlug;
  code: string;
  usage: string;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-[1120px] px-6 pt-14 pb-8 sm:pt-16 sm:pb-10">
        <h1 className="text-center text-[2.15rem] leading-[1.12] font-medium tracking-[-0.05em] text-black sm:text-[2.5rem] dark:text-white">
          {name}
        </h1>
      </div>
      <DocTabs
        tabs={[
          { label: "Preview", content: <DocPreview slug={slug} /> },
          { label: "Code", content: <CodePreview code={code} /> },
          { label: "Usage", content: <CodePreview code={usage} /> },
        ]}
      />
    </div>
  );
}
