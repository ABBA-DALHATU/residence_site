import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import Container from "@/components/global/container";
import Navbar from "@/components/navbar/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const euclid = localFont({
  src: "./fonts/Euclid Circular B Regular.ttf",
  variable: "--font-euclid",
  weight: "500",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://residence-site.vercel.app"),
  title: "Residence | Smart Property Management & Secure Renting Platform",
  description:
    "Residence is your trusted platform for seamless property management and secure renting. Landlords get powerful tools to manage properties efficiently, while tenants enjoy a safe and transparent renting experience.",
  keywords: [
    "property management",
    "rental platform",
    "secure renting",
    "landlord tools",
    "tenant portal",
    "real estate management",
    "property rental",
    "housing platform",
    "rental marketplace",
    "property listing",
  ],
  authors: [{ name: "Residence Team" }],
  openGraph: {
    title: "Residence | Smart Property Management & Secure Renting Platform",
    description:
      "Transform your property management and renting experience with Residence. The trusted platform connecting landlords and tenants.",
    url: "https://residence-site.vercel.app",
    siteName: "Residence",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Residence - Smart Property Management & Secure Renting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residence | Smart Property Management & Secure Renting Platform",
    description:
      "Transform your property management and renting experience with Residence. The trusted platform connecting landlords and tenants.",
    site: "@residence",
    creator: "@residence",
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Residence - Smart Property Management & Secure Renting Platform",
      },
    ],
  },
  applicationName: "Residence",
  creator: "Residence Team",
  publisher: "Residence Ltd",
  formatDetection: {
    telephone: true,
    email: true,
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#FFFFFF",
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${euclid.variable} ${geistMono.variable} font-euclid antialiased`}
      >
        <Navbar />
        {/* Main content area */}
        {children}
      </body>
      <Toaster />
    </html>
  );
}
