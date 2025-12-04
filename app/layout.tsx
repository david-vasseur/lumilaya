import type { Metadata } from "next";
import { Ballet, Dynalight, Geist, Geist_Mono, Parisienne, The_Nautigal, Whisper } from "next/font/google";
import "./globals.css";
import Navigation from "./components/features/Navigation";
import Footer from "./components/layout/Footer";
import Modal from "./components/features/Modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ballet = Parisienne({
  variable: "--font-ballet",
  weight: ['400']
})

export const metadata: Metadata = {
  title: "LUMILAYA • Bougies naturelles artisanales",
  description:
    "Bougies naturelles parfumées, fabriquées artisanalement en France dans le gard. Cire 100% végétale, parfums uniques, créations émotionnelles. Découvrez les collections LUMILAYA.",
  
  keywords: [
    "bougies naturelles",
    "bougies parfumées",
    "bougies artisanales",
    "cire végétale",
    "bougies françaises",
    "bougie parfum",
    "cadeau parfumé",
    "LUMILAYA",
  ],

  openGraph: {
    title: "LUMILAYA • Bougies naturelles artisanales",
    description:
      "Découvrez les bougies naturelles LUMILAYA : cire végétale, parfums authentiques, créations émotionnelles fabriquées en France.",
    url: "https://www.lumilaya.fr",
    siteName: "LUMILAYA",
    images: [
      {
        url: "https://www.lumilaya.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bougie naturelle LUMILAYA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LUMILAYA • Bougies naturelles artisanales",
    description:
      "Bougies naturelles parfumées, cire végétale, fabrication artisanale française. Explorez les émotions en lumière.",
    images: ["https://www.lumilaya.fr/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.lumilaya.fr",
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
        className={`${geistSans.variable} ${geistMono.variable} ${ballet.variable} antialiased overflow-x-hidden`}
      >
        <Navigation />
        {children}
        <Modal />
      </body>
    </html>
  );
}
