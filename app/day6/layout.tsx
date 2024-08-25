export default function Day6Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="city-map-bg bg-cover">{children}</div>;
}
