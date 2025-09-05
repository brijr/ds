"use client";

import { useState } from "react";

interface ElementDisplayProps {
  children: React.ReactNode;
  elementType: React.ElementType;
}

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const DEFAULT_DEMO_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const TYPOGRAPHY_ELEMENTS: React.ElementType[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "a",
  "blockquote",
  "code",
  "pre",
  "em",
  "strong",
  "small",
  "mark",
];

// Components
const TextInput = ({ value, onChange }: TextInputProps) => (
  <div className="grid gap-1 p-4 bg-muted">
    <label className="text-sm text-muted-foreground max-w-4xl mx-auto">
      Demo Text
    </label>
    <input
      className="w-full border border-border p-2 bg-background rounded max-w-lg mx-auto"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter text to preview..."
    />
  </div>
);

const ElementDisplay = ({ children, elementType }: ElementDisplayProps) => {
  const Element = elementType;
  const elementName = elementType.toString();

  return (
    <section className="border border-border max-w-4xl mx-auto">
      <header className="text-sm text-muted-foreground p-2 border-b border-border bg-muted">
        &lt;{elementName}&gt;
      </header>
      <div className="truncate p-2">
        <Element>{children}</Element>
      </div>
    </section>
  );
};

const TypographyDemo = ({ text }: { text: string }) => (
  <div className="p-4 space-y-4">
    <h1 className="text-center text-lg font-semibold">Typography Demo</h1>
    {TYPOGRAPHY_ELEMENTS.map((elementType) => (
      <ElementDisplay key={elementType.toString()} elementType={elementType}>
        {text}
      </ElementDisplay>
    ))}
  </div>
);

// Main Component
export default function Home() {
  const [demoText, setDemoText] = useState(DEFAULT_DEMO_TEXT);

  return (
    <main className="divide-y divide-border">
      <TextInput value={demoText} onChange={setDemoText} />
      <TypographyDemo text={demoText} />
    </main>
  );
}
