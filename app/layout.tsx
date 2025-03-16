import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // ✅ Global styles

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TPC Madhepura Tech Team",
  description:
    "TPC Madhepura Tech Team is a passionate group of developers, designers, and tech enthusiasts dedicated to innovation. We specialize in web and mobile development, UI/UX design, and emerging technologies to create impactful digital solutions. Our mission is to collaborate, learn, and build cutting-edge applications that solve real-world problems.",
  icons:
    "https://github.com/user-attachments/assets/3047a20b-df1d-4217-b846-c7c21ef2427b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
