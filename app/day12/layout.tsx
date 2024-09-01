export default function Day12Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[url('/login-bg.png')] bg-cover bg-center">
      {children}
    </div>
  );
}
