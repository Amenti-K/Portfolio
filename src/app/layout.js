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
      <head>
        <title>Amenti | Portfolio</title>
        <meta
          name="description"
          content="Explore Amenti's portfolio, showcasing projects in web development, mobile app development, and software solutions."
        />
        <meta
          name="keywords"
          content="Amenti, portfolio, web development, mobile apps, software developer, full-stack developer"
        />
        <meta name="author" content="Amenti" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <div className="fixed inset-0 -z-10 h-full w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </body>
    </html>
  );
}
