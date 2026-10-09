"use client"

import { useState } from "react"
import InputLine from "@/components/ui/input-line"

export default function DemoPage() {
  const [email, setEmail] = useState("")

  return (
    <InputLine label="Email Address" value={email} onChange={setEmail} />
  );
}
