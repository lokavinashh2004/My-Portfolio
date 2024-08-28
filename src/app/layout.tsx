import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Sora } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const SORA = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Varadarajan M - Full Stack Engineer | Crafting Delighful User Experiences",
  description:
    "Hey, I'm Varadarajan M, a skilled full-stack software engineer specializing in crafting high-performance applications with React, Next.js, and Node.js. With a strong foundation in software engineering, I deliver robust, scalable solutions tailored to your needs. Contact me for your next project!",
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
  ],
  openGraph: {
    title:
      "Varadarajan M - Full Stack Engineer | Crafting Delighful User Experiences",
    description:
      "Hey, I'm Varadarajan M, a skilled full-stack software engineer specializing in crafting high-performance applications with React, Next.js, and Node.js. With a strong foundation in software engineering, I deliver robust, scalable solutions tailored to your needs. Contact me for your next project!",
    url: "https://varadarajan-m.vercel.app",
    // images: ['@/public/avatar.png'], // Replace with the actual image path
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Varadarajan M - Full Stack Engineer | Crafting Delighful User Experiences",
    description:
      "Hey, I'm Varadarajan M, a skilled full-stack software engineer specializing in crafting high-performance applications with React, Next.js, and Node.js. With a strong foundation in software engineering, I deliver robust, scalable solutions tailored to your needs. Contact me for your next project!",
    //  images: ['@/public/avatar.png'], // Replace with the actual image path
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
