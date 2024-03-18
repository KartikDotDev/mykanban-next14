import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const inter = FontSans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Synapse Sync",
  description: "Kanban app for managing tasks",
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
