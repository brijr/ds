"use client";

import { useState, useEffect } from "react";

// Font Types and Constants
type FontFamily = {
  name: string;
  value: string;
};

interface ElementDisplayProps {
  children: React.ReactNode;
  elementType: React.ElementType;
}

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

interface FontSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: FontFamily[];
}

const DEFAULT_DEMO_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `;

const FONT_OPTIONS: FontFamily[] = [
  {
    name: "Inter (Sans)",
    value: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  {
    name: "System Sans",
    value: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  {
    name: "Georgia (Serif)",
    value: 'Georgia, Cambria, "Times New Roman", Times, serif',
  },
  { name: "Times (Serif)", value: '"Times New Roman", Times, serif' },
  {
    name: "SF Mono",
    value: '"SF Mono", Monaco, Consolas, "Courier New", monospace',
  },
  { name: "Courier (Mono)", value: '"Courier New", Courier, monospace' },
  { name: "Arial", value: "Arial, Helvetica, sans-serif" },
  { name: "Helvetica", value: "Helvetica, Arial, sans-serif" },
];

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
const FontSelector = ({
  label,
  value,
  onChange,
  options,
}: FontSelectorProps) => (
  <div className="grid gap-1">
    <label className="text-sm text-muted-foreground">{label}</label>
    <select
      className="border border-border p-2 bg-background rounded text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((font) => (
        <option key={font.name} value={font.value}>
          {font.name}
        </option>
      ))}
    </select>
  </div>
);

const TextInput = ({ value, onChange }: TextInputProps) => (
  <div className="grid gap-1">
    <label className="text-sm text-muted-foreground">Demo Text</label>
    <input
      className="border border-border p-2 bg-background rounded text-sm"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter text to preview..."
    />
  </div>
);

const ControlPanel = ({
  demoText,
  setDemoText,
  headingFont,
  setHeadingFont,
  bodyFont,
  setBodyFont,
}: {
  demoText: string;
  setDemoText: (text: string) => void;
  headingFont: string;
  setHeadingFont: (font: string) => void;
  bodyFont: string;
  setBodyFont: (font: string) => void;
}) => (
  <div className="fixed bottom-0 left-0 right-0 p-4 bg-muted border-t border-border backdrop-blur-sm bg-muted/95 z-50">
    <div className="max-w-4xl mx-auto grid gap-2 md:grid-cols-3">
      <TextInput value={demoText} onChange={setDemoText} />
      <FontSelector
        label="Heading Font"
        value={headingFont}
        onChange={setHeadingFont}
        options={FONT_OPTIONS}
      />
      <FontSelector
        label="Body Font"
        value={bodyFont}
        onChange={setBodyFont}
        options={FONT_OPTIONS}
      />
    </div>
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
  const [headingFont, setHeadingFont] = useState(FONT_OPTIONS[0].value);
  const [bodyFont, setBodyFont] = useState(FONT_OPTIONS[0].value);

  // Update CSS custom properties when fonts change
  useEffect(() => {
    const updateFontVariables = () => {
      const root = document.documentElement;

      // Update heading font for h1-h6
      root.style.setProperty("--font-heading", headingFont);

      // Update body font for p, body, and other text elements
      root.style.setProperty("--font-body", bodyFont);
    };

    updateFontVariables();
  }, [headingFont, bodyFont]);

  return (
    <>
      <main className="pb-32">
        <TypographyDemo text={demoText} />
      </main>

      <ControlPanel
        demoText={demoText}
        setDemoText={setDemoText}
        headingFont={headingFont}
        setHeadingFont={setHeadingFont}
        bodyFont={bodyFont}
        setBodyFont={setBodyFont}
      />

      {/* Dynamic styles */}
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(--font-heading, var(--font-sans)) !important;
        }

        p,
        body,
        blockquote,
        small {
          font-family: var(--font-body, var(--font-sans)) !important;
        }

        code,
        pre {
          font-family: var(--font-mono) !important;
        }
      `}</style>
    </>
  );
}
