import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react"; // Pastikan dev install lenis

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Anugerah Ventures",
  description: "Vision. Velocity. Ventures.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-background text-foreground antialiased selection:bg-primary/30`}>
        {/* ReactLenis membungkus konten untuk smooth scroll */}
        {/* @ts-ignore - abaikan jika ada error type sementara */}
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}