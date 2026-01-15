import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { personal } from "../data/personal";
import CursorSplash from "../components/CursorSplash";

export const metadata: Metadata = {
  title: `Portfolio | ${personal.name}`,
  description:
    "Portfolio of Suraj Naveen, showcasing projects, skills, experience, and certificates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <CursorSplash />
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}


