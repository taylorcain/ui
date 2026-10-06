"use client"

import { useState } from "react"
import Textarea from "@/components/ui/textarea"

export default function DemoPage() {
  const [message, setMessage] = useState('');

  return (
    <Textarea
      label="Message"
      value={message}
      onChange={setMessage}
      rows={5}
    />
  );
}