export const components = [
  {
    slug: "accordion",
    name: "Accordion",
    codePath: "components/ui/accordion.tsx",
    usagePath: "components/ui/accordion-usage.tsx",
  },
  {
    slug: "button-simple",
    name: "Button Simple",
    codePath: "components/ui/button.tsx",
    usagePath: "components/ui/button-usage.tsx",
  },
  {
    slug: "button-ripple",
    name: "Button Ripple",
    codePath: "components/ui/button-ripple.tsx",
    usagePath: "components/ui/button-ripple-usage.tsx",
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    codePath: "components/ui/checkbox.tsx",
    usagePath: "components/ui/checkbox-usage.tsx",
  },
  {
    slug: "input-pill",
    name: "Input Pill",
    codePath: "components/ui/input.tsx",
    usagePath: "components/ui/input-usage.tsx",
  },
  {
    slug: "input-line",
    name: "Input Line",
    codePath: "components/ui/input-line.tsx",
    usagePath: "components/ui/input-line-usage.tsx",
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    codePath: "components/ui/radio-group.tsx",
    usagePath: "components/ui/radio-group-usage.tsx",
  },
  {
    slug: "switch",
    name: "Switch",
    codePath: "components/ui/switch.tsx",
    usagePath: "components/ui/switch-usage.tsx",
  },
  {
    slug: "switch-2",
    name: "Switch 2",
    codePath: "components/ui/switch-2.tsx",
    usagePath: "components/ui/switch-2-usage.tsx",
  },
  {
    slug: "tabs",
    name: "Tabs",
    codePath: "components/ui/tabs.tsx",
    usagePath: "components/ui/tabs-usage.tsx",
  },
  {
    slug: "textarea",
    name: "Textarea",
    codePath: "components/ui/textarea.tsx",
    usagePath: "components/ui/textarea-usage.tsx",
  },
] as const;

export type ComponentSlug = (typeof components)[number]["slug"];

export function getComponent(slug: string) {
  return components.find((item) => item.slug === slug);
}
