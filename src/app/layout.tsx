import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Sora } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const SORA = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "T.Lok Avinashh | AI & Data Science Student | Machine Learning Engineer",
  description:
    "T.Lok Avinashh is an innovative AI & Data Science student with expertise in machine learning, deep learning, and full-stack development. Building AI-driven applications and 3D modeling solutions.",
  keywords: [
    "AI student",
    "data science student",
    "machine learning engineer",
    "deep learning",
    "artificial intelligence",
    "Python developer",
    "TensorFlow",
    "PyTorch",
    "computer vision",
    "natural language processing",
    "T.Lok Avinashh",
    "portfolio",
    "AI projects",
    "sign language translation",
    "ECG analysis",
    "speech to text",
    "3D modeling",
    "Blender",
    "Google Cloud",
  ],
  openGraph: {
    title:
      "T.Lok Avinashh | AI & Data Science Student | Machine Learning Engineer",
    description:
      "T.Lok Avinashh is an innovative AI & Data Science student with expertise in machine learning, deep learning, and full-stack development. Building AI-driven applications and 3D modeling solutions.",
    url: "https://lokavinashh.vercel.app",
    images: ['/site.png'],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "T.Lok Avinashh | AI & Data Science Student | Machine Learning Engineer",
    description:
      "T.Lok Avinashh is an innovative AI & Data Science student with expertise in machine learning, deep learning, and full-stack development. Building AI-driven applications and 3D modeling solutions.",
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
