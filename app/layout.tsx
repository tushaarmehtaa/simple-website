import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Tushaar Mehta",
  description: "I'm Tushaar and this is my little corner of the internet where I try to explain what I do.",
  openGraph: {
    title: "Tushaar Mehta",
    description: "I'm Tushaar and this is my little corner of the internet where I try to explain what I do.",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Tushaar Mehta"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushaar Mehta",
    description: "I'm Tushaar and this is my little corner of the internet where I try to explain what I do.",
    images: ["/profile.jpg"],
    creator: "@tushaarmehtaa"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.variable} font-raleway font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
