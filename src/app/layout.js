"use client";

import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Source_Code_Pro } from "next/font/google";

const SourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={SourceCodePro.className}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
