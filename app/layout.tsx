import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./header";
import Footer from "./footer";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Milene Toazza - Engenheira de Software | Desenvolvedora Frontend",
  description: "Portfólio de Milene Toazza, engenheira de software especializada em desenvolvimento frontend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} bg-pattern min-h-screen relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
