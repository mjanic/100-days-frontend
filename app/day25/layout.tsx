export default function Day25Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="bg-purple-100">{children}</div>
      </body>
    </html>
  );
}
