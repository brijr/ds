export default function Home() {
  return (
    <main className="p-8">
      <TypeWrapper type="h1">
        <p>This is some text!</p>
      </TypeWrapper>
    </main>
  );
}

const TypeWrapper = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  return (
    <div className="p-4 border">
      {type === "h1" && <h1>{children}</h1>}
      {type === "h2" && <h2>{children}</h2>}
      {type === "h3" && <h3>{children}</h3>}
      {type === "h4" && <h4>{children}</h4>}
      {type === "h5" && <h5>{children}</h5>}
    </div>
  );
};
