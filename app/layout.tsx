import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Has Trump died?",
  description:
    "Informative website for people wondering if POTUS Donald Trump has died.",
  openGraph: {
    title: "Has Trump died?",
    description:
      "Informative website for people wondering if POTUS Donald Trump has died.",
    url: "https://hastrumpdied.com",
    images: [{ url: "https://hastrumpdied.com/og.jpg?v2" }],
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          async
          src="https://stats.broddin.be/js/pa-trh9sTvfpt8v7jlP_gEp7.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
        <script
          async
          data-ad-client="ca-pub-4111628699519217"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </head>
      <body className="font-(family-name:--font-body) text-cream bg-bg antialiased">
        {children}
      </body>
    </html>
  );
}
