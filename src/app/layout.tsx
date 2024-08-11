import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections/Header";
import HamburgerMenu from "@/components/HamburgerMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali AI",
  description:
    "A landing page for Ali AI startup company created by Kei-K23 with NextJS, TailwindCSS and Framer-motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <HamburgerMenu>
          <Header />
          {children}
        </HamburgerMenu>
      </body>
    </html>
  );
}
