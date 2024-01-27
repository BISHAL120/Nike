import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import { urbanist } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JUST DO IT.",
  description: "JUST DO IT. Nike Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
