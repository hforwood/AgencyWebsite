import type { Metadata } from "next";
import localFont from "next/font/local";

import { MinimalFooter } from "@/components/ui/minimal-footer";

import "./globals.css";

const degularDisplay = localFont({
  src: [
    {
      path: "../../Degular Font Family/DegularDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Degular Font Family/DegularDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../Degular Font Family/DegularDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../Degular Font Family/DegularDisplay-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-degular-display",
  display: "swap",
});

const dmSans = localFont({
  src: [
    {
      path: "../../DM-Sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../DM-Sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../DM-Sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flooencer Agency | B2B creator campaigns for SaaS",
  description:
    "Work with Flooencer Agency to run B2B creator campaigns for SaaS, AI, and technology companies.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${degularDisplay.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <div className="flex-1">{children}</div>
        <MinimalFooter />
      </body>
    </html>
  );
}
