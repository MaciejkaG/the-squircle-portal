"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./ui/button";
import { useState } from "react";

export function Code({
  children,
  language,
}: {
  children: string;
  language: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {children}
      </SyntaxHighlighter>
      <Button
        onClick={copyToClipboard}
        className="absolute top-2 right-2"
        size="sm"
      >
        {isCopied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}