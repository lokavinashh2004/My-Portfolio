import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Sora } from "next/font/google";
import "./globals.css";

const SORA  = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varadarajan M | Full Stack Software Engineer",
  description: "I am Varadarajan, a Full Stack Software Engineer specializing in crafting high-performance web applications with React, Next.js, Express, and MongoDB. I deliver exceptional user experiences.",
  keywords: ["Varadarajan", "portfolio", "Varadarajan M Portfolio", "Varadarajan portfolio", "frontend engineer" , "full stack developer", "React", "Next.js", "Express", "MongoDB", "web development", "web applications", "user experience"],
  openGraph: {
    title: "Varadarajan M | Portfolio",
    description: "I am Varadarajan, a Full Stack Software Engineer specializing in crafting high-performance web applications with React, Next.js, Express, and MongoDB. I deliver exceptional user experiences.",
    url: "https://varadarajan-m.vercel.app", 
    // images:['@/public/avatar.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varadarajan M | Portfolio",
    description: "I am Varadarajan, a Full Stack Software Engineer specializing in crafting high-performance web applications with React, Next.js, Express, and MongoDB. I deliver exceptional user experiences.",
    // images:['@/public/avatar.png'], // Replace with the path to your image
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SORA.className} antialiased scroll-smooth`}>{children}
      <Analytics />

      </body>
    </html>
  );
}
