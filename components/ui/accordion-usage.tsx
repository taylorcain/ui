import Accordion from "@/components/ui/accordion"

export default function DemoPage() {
  return (
    <Accordion
      items={[
        {
          title: (
            <h3 className="text-xl">Accordion title</h3>
          ),
          content: (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ),
        },
        {
          title: (
            <h3 className="text-xl">Accordion title</h3>
          ),
          content: (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ),
        },
        {
          title: (
            <h3 className="text-xl">Accordion title</h3>
          ),
          content: (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ),
        },
      ]}
    />
  );
}