"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useSyncExternalStore } from "react";
import RippleIconButton from "@/components/ripple-icon-button";

function subscribeToTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

const lightStyle = {
  ...oneLight,
  'code[class*="language-"]': {
    ...oneLight['code[class*="language-"]'],
    background: "transparent",
  },
  'pre[class*="language-"]': {
    ...oneLight['pre[class*="language-"]'],
    background: "transparent",
  },
};

const darkStyle = {
  ...nightOwl,
  'code[class*="language-"]': {
    ...nightOwl['code[class*="language-"]'],
    background: "transparent",
  },
  'pre[class*="language-"]': {
    ...nightOwl['pre[class*="language-"]'],
    background: "transparent",
  },
};

export default function CodePreview({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const isDark = useSyncExternalStore(subscribeToTheme, getIsDark, () => false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[1rem] bg-white dark:bg-[#1e1e1e]">
      <SyntaxHighlighter
        language="tsx"
        style={isDark ? darkStyle : lightStyle}
        customStyle={{
          borderRadius: "1rem",
          padding: "1.25rem",
          fontSize: "14px",
          margin: 0,
          background: "transparent",
        }}
        codeTagProps={{ style: { background: "transparent" } }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
      <div className="absolute top-4 right-4 z-10">
        <RippleIconButton ariaLabel={copied ? "Copied" : "Copy code"} onClick={() => void handleCopy()}>
          {copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" fill="none" points="6.36 12.3 10.93 17.53 18.84 5.75" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
              <rect fill="none" x="4.26" y="9.26" width="10.48" height="10.48" rx="2.07" ry="2.07" />
              <path fill="none" d="M14.74,14.74h2.94c1.14,0,2.07-.93,2.07-2.07v-6.34c0-1.14-.93-2.07-2.07-2.07h-6.34c-1.14,0-2.07.93-2.07,2.07v2.94" />
            </svg>
          )}
        </RippleIconButton>
      </div>
    </div>
  );
}
