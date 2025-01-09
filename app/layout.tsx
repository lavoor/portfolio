import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Gradient from "./components/gradient"
import "./globals.css";
import Footer from "./components/footer";
import NextTopLoader from 'nextjs-toploader';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const description: string = "Front-end developer, który tworzy intuicyjne i nowoczesne strony internetowe. Na stronie znajdziesz projekty z wykorzystaniem React, Next.js i Vue.js, które łączą estetykę z funkcjonalnością.";

export const metadata: Metadata = {
  title: "Portfolio - Front-end developer",
  description: description,
  metadataBase: new URL('https://stanislawsynal.pl'),
  creator: "Stanisław Synal",
  keywords: ['front end developer', 'portfolio programisty', ' ile zarabia programista', 'reactjs portfolio'],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
    },
  },
  openGraph: {
    title: 'stanislawsynal.pl',
    description: description,
    url: 'https://stanislawsynal.pl',
    images: [
      {
        url: 'https://stanislawsynal.pl/images/ogimage.jpg',
        width: 1152,
        height: 648,
      },
    ],
    locale: 'pl_PL',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" type="image/png" href="/images/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/icons/favicon.svg" />
        <link rel="shortcut icon" href="/images/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="stanislawsynal" />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
      </head>
      <body>
        <NextTopLoader
          color="#FF64A2"
          initialPosition={0.08}
          crawlSpeed={200}
          height={6}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow={false}
        />
        <Gradient />
        <Navbar />
        {children}
        <Footer/>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
