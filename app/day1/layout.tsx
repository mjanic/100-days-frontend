export default function Day1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-yellow-100">
        {children}
      </div>
  );
}