import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://surajnaveen.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suraj Naveen — I like to build",
    template: "%s | Suraj Naveen",
  },
  description:
    "Suraj Naveen is a software engineer in the San Francisco Bay Area with a CS and Data Science degree from UW–Madison, building full-stack products, retrieval systems, and ML pipelines.",
  authors: [{ name: "Suraj Naveen", url: siteUrl }],
  creator: "Suraj Naveen",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Suraj Naveen",
    title: "Suraj Naveen — I like to build",
    description:
      "Portfolio of Suraj Naveen — software engineer, researcher, and builder based in the San Francisco Bay Area.",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 1200,
        alt: "Suraj Naveen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Naveen — I like to build",
    description:
      "Portfolio of Suraj Naveen — software engineer, researcher, and builder based in the San Francisco Bay Area.",
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#f4f1ea",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <Script id="strip-extension-attrs" strategy="beforeInteractive">
          {`try{var h=document.documentElement;['jd-enabled','data-extension-id','cz-shortcut-listen'].forEach(function(a){h.removeAttribute(a)});}catch(e){}`}
        </Script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
