import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  JetBrains_Mono,
  Merriweather,
  Open_Sans,
  Roboto,
  Lato,
  Montserrat,
  Poppins,
  Source_Sans_3,
  Crimson_Text,
  Libre_Baskerville,
  Fira_Code,
  Source_Code_Pro,
} from "next/font/google";

import "./globals.css";
import "./styles/typography.css";

// Font configurations
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sourcesans",
  subsets: ["latin"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-librebaskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} ${merriweather.variable} ${openSans.variable} ${roboto.variable} ${lato.variable} ${montserrat.variable} ${poppins.variable} ${sourceSans.variable} ${crimsonText.variable} ${libreBaskerville.variable} ${firaCode.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
