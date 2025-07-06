import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

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

export const metadata: Metadata = {
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
    type: "website",
    siteName: "Residence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residence | Smart Property Management & Secure Renting Platform",
    description:
      "Transform your property management and renting experience with Residence. The trusted platform connecting landlords and tenants.",
  },
  applicationName: "Residence",
  creator: "Residence Team",
  publisher: "Residence Ltd",
  formatDetection: {
    telephone: true,
    email: true,
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#16A34A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Toaster />
    </html>
  );
}
