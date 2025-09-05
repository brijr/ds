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
  // Sans-serif fonts
  { name: "Inter", value: "Inter" },
  { name: "Open Sans", value: "Open Sans" },
  { name: "Roboto", value: "Roboto" },
  { name: "Lato", value: "Lato" },
  { name: "Montserrat", value: "Montserrat" },
  { name: "Poppins", value: "Poppins" },
  { name: "Source Sans 3", value: "Source Sans 3" },

  // Serif fonts
  { name: "Merriweather", value: "Merriweather" },
  { name: "Playfair Display", value: "Playfair Display" },
  { name: "Crimson Text", value: "Crimson Text" },
  { name: "Libre Baskerville", value: "Libre Baskerville" },

  // Monospace fonts
  { name: "JetBrains Mono", value: "JetBrains Mono" },
  { name: "Fira Code", value: "Fira Code" },
  { name: "Source Code Pro", value: "Source Code Pro" },
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
    const root = document.documentElement;

    // Set the font families directly
    root.style.setProperty("--font-heading", headingFont);
    root.style.setProperty("--font-body", bodyFont);

    console.log("Set fonts:", { headingFont, bodyFont });
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
    </>
  );
}
