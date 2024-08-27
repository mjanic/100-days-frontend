import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "100daysFrontend",
  description: "practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
