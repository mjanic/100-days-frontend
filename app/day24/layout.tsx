export default function Day24Layout({
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
