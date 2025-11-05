import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Kurs Kostki Rubika",
  description: "Naucz się układać kostkę Rubika i inne łamigłówki logiczne zdalnie lub starcjonarnie w prosty i nowoczesny sposób zrozumiały dla każdego, bez ciężkich schematów.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
