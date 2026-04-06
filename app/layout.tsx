import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Music Store — Website Proposal",
  description:
    "A Spotify-inspired music store where fans can purchase and download your songs — built with Next.js and Stripe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
