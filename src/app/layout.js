import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://surajnaveen.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suraj Naveen — Software Engineer & Builder",
    template: "%s | Suraj Naveen",
  },
  description:
    "Suraj Naveen is a software engineer studying CS and Data Science at the University of Wisconsin-Madison. Portfolio of work, research, and projects.",
  authors: [{ name: "Suraj Naveen", url: siteUrl }],
  creator: "Suraj Naveen",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Suraj Naveen",
    title: "Suraj Naveen — Software Engineer & Builder",
    description:
      "Portfolio of Suraj Naveen — software engineer, researcher, and builder based in Madison, WI.",
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
    title: "Suraj Naveen — Software Engineer & Builder",
    description:
      "Portfolio of Suraj Naveen — software engineer, researcher, and builder based in Madison, WI.",
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
  themeColor: "#07060d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="strip-extension-attrs" strategy="beforeInteractive">
          {`try{var h=document.documentElement;['jd-enabled','data-extension-id','cz-shortcut-listen'].forEach(function(a){h.removeAttribute(a)});}catch(e){}`}
        </Script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
