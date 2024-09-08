export default function Day20Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-slate-100">{children}</body>
    </html>
  );
}
