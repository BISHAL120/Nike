import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import { urbanist } from "./fonts";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JUST DO IT.",
  description: "JUST DO IT. Nike Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QC4LCG6T0N"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QC4LCG6T0N');`}
        </Script>
      </head>
      <body className={urbanist.className}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
