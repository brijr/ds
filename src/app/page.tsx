"use client";

import { useState } from "react";

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`;

const elementTypes = [
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

export default function Home() {
  const [demoText, setDemoText] = useState(text);

  return (
    <main className="divide-y divide-border">
      <div className="grid gap-1 p-4 bg-muted">
        <label className="text-sm text-muted-foreground max-w-4xl mx-auto">
          Demo Text
        </label>
        <input
          className="w-full border border-border p-2 bg-background rounded max-w-lg mx-auto"
          type="text"
          value={demoText}
          onChange={(e) => setDemoText(e.target.value)}
        />
      </div>

      <div className="p-4 space-y-4">
        <p className="text-center">Typography Demo</p>
        {elementTypes.map((type) => (
          <Wrapper key={type} as={type as React.ElementType}>
            {demoText}
          </Wrapper>
        ))}
      </div>
    </main>
  );
}

const Wrapper = ({
  children,
  as,
}: {
  children: React.ReactNode;
  as: React.ElementType;
}) => {
  const Element = as;

  return (
    <section className="border border-border max-w-4xl mx-auto">
      <div className="text-sm text-muted-foreground p-2 border-b border-border bg-muted">
        {as as string}
      </div>
      <div className="truncate p-2">
        <Element>{children}</Element>
      </div>
    </section>
  );
};
