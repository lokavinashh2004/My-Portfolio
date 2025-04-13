import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Sora } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const SORA = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Varadarajan M | Building High-Performance Web Experiences",
  description:
    "Varadarajan M is a skilled Full-Stack Developer specializing in high-performance web apps using React, Next.js, and Node.js. View my portfolio and contact me for your next project.",
  keywords: [
    "full stack developer",
    "web developer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "web development",
    "application development",
    "software solutions",
    "Varadarajan M",
    "portfolio",
    "hire software engineer",
    "hire full stack developer",
    "AI form builder",
    "real-time chat app",
    "responsive web design",
    "MongoDB developer",
  ],
  openGraph: {
    title:
      "Varadarajan M | Building High-Performance Web Experiences",
    description:
      "Varadarajan M is a skilled Full-Stack Developer specializing in high-performance web apps using React, Next.js, and Node.js. View my portfolio and contact me for your next project.",
    url: "https://varadarajan-m.vercel.app",
    images: ['/site.png'],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Varadarajan M | Building High-Performance Web Experiences",
    description:
      "Varadarajan M is a skilled Full-Stack Developer specializing in high-performance web apps using React, Next.js, and Node.js. View my portfolio and contact me for your next project.",
     images: ['/site.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SORA.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
