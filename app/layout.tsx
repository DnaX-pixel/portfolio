import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muhammad Daniel Rosley | Network Engineer & Full-Stack Developer",
  description: "Field-oriented Network Engineer with experience in network deployment, fiber optic cross-connection, and high-speed Ethernet commissioning. Full-stack developer specializing in web platforms and IoT solutions.",
  keywords: ["Network Engineer", "Full-Stack Developer", "Web Development", "IoT", "Telekom Malaysia", "Sabah", "Network Technician", "PHP Developer", "ESP32", "IoT Solutions"],
  authors: [{ name: "Muhammad Daniel Bin Rosley" }],
  creator: "Muhammad Daniel Bin Rosley",
  openGraph: {
    title: "Muhammad Daniel Rosley | Network Engineer & Full-Stack Developer",
    description: "Field-oriented Network Engineer with experience in network deployment, fiber optic cross-connection, and high-speed Ethernet commissioning.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Daniel Rosley | Network Engineer & Full-Stack Developer",
    description: "Field-oriented Network Engineer & Full-Stack Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

