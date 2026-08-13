import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Akib Dabgar | Full-Stack Software Engineer",
  description: "Professional portfolio of Akib Dabgar, a seasoned Full-Stack Developer with 3+ years of experience engineering high-throughput, low-latency web applications using NestJS, React, and RabbitMQ.",
  keywords: ["Akib Dabgar", "Full-Stack Developer", "Software Engineer", "NestJS", "React", "Next.js", "TypeScript", "RabbitMQ", "PostgreSQL", "Ahmedabad"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
