import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Open_Sans,
  Montserrat,
  Source_Sans_3,
  Fira_Code,
  Source_Code_Pro,
} from "next/font/google";

import "./globals.css";
import "./styles/typography.css";

// Variable font configurations
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sourcesans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-firacode",
  subsets: ["latin"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-sourcecodepro",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ds / brijr",
  description: "a design system by brijr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${openSans.variable} ${montserrat.variable} ${sourceSans.variable} ${firaCode.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
