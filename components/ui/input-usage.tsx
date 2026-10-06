"use client"

import { useState } from "react"
import Input from "@/components/ui/input"

export default function DemoPage() {
  const [email, setEmail] = useState("")

  return (
    <Input label="Email Address" value={email} onChange={setEmail} />
  );
}
