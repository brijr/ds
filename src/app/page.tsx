const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`;

const elementTypes = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "a"];

export default function Home() {
  return (
    <main className="p-2 space-y-4">
      {elementTypes.map((type) => (
        <Wrapper key={type} as={type as React.ElementType}>
          {text}
        </Wrapper>
      ))}
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
    <section className="border border-border">
      <div className="text-sm text-muted-foreground p-2 border-b border-border bg-muted">
        {as as string}
      </div>
      <div className="line-clamp-2 p-2">
        <Element>{children}</Element>
      </div>
    </section>
  );
};
