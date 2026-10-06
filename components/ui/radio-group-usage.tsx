"use client"

import RadioGroup from "@/components/ui/radio-group"

export default function DemoPage() {
  return (
    <RadioGroup
      options={["Option 1", "Option 2", "Option 3"]}
      onChange={(val) => console.log("Selected:", val)}
    />
  )
}
