import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://aryan-bandi-v1.vercel.app/"),

  openGraph: {
    title: "Aryan Bandi",
    description: "Join us for a beautiful celebration of tradition and blessings. 29 November 2026",
    url: "https://aryan-bandi-v1.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Aryan Bandi",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aryan Bandi",
    description: "Join us for a beautiful celebration of tradition and blessings. 29 November 2026",
    images: ["/og.jpg"],
  },

  other: {
    "og:image:secure_url": "https://aryan-bandi-v1.vercel.app/og.jpg",
    "og:image:type": "image/jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}