"use client"

import Tabs from "@/components/ui/tabs"

export default function DemoPage() {
  const tabs = [
    {
      label: 'Tab 1',
      content: (
        <div>
          <h2 className="text-xl mb-2">Tab 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ),
    },
    {
      label: 'Tab 2',
      content: (
        <div>
          <h2 className="text-xl mb-2">Tab 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ),
    },
    {
      label: 'Tab 3',
      content: (
        <div>
          <h2 className="text-xl mb-2">Tab 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ),
    },
  ]
  return (
    <Tabs tabs={tabs} />
  )
}
