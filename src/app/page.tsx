const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`;

export default function Home() {
  return (
    <main className="p-8 space-y-4">
      <Wrapper as="h1">{text}</Wrapper>
      <Wrapper as="h2">{text}</Wrapper>
      <Wrapper as="h3">{text}</Wrapper>
      <Wrapper as="a">{text}</Wrapper>
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
    <div className="p-4 border line-clamp-2">
      <Element>{children}</Element>
    </div>
  );
};
