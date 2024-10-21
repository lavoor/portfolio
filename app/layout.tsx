import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Gradient from "./components/gradient"
import "./globals.css";

const description: string = "Jestem front-end developerem, który tworzy intuicyjne i nowoczesne strony internetowe. Na moim portfolio znajdziesz projekty z wykorzystaniem React, Next.js i Vue.js, które łączą estetykę z funkcjonalnością.";

export const metadata: Metadata = {
  title: "Strona główna",
  description,
  creator: "Stanisław Synal",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Gradient />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
