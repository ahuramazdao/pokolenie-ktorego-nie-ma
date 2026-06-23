import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pokolenie, którego nie ma - raport o demografii i przyszłości klubów sportowych | ProgramyDlaKlubow.pl",
  description: "Rodzi się trzy razy mniej dzieci niż w latach 80. Pierwszy w Polsce raport o tym, co spadek liczby dzieci zrobi z Twoim klubem lub akademią. Pobierz bezpłatnie (PDF).",
  openGraph: {
    title: "Pokolenie, którego nie ma",
    description: "Za 8 lat do akademii zapuka o ponad 40% mniej dzieci. Bezpłatny raport PDF.",
    images: [{ url: "/okladka-A4.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
