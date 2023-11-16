import "@/styles/globals.css"

import { Metadata } from "next"
import { Viewport } from 'next'

import { siteConfig } from "@/config/site"
import { fontInter } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import Header from "@/components/header"
import ScrollToTop from "@/components/scroll-to-top"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import "node_modules/react-modal-video/css/modal-video.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Cara",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Tailwind CSS Animated",
  ],
  authors: [
    {
      name: "enginux",
      url: "https://enginux.art",
    },
  ],
  creator: "enginux",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon-16x16.png",
    apple: "/images/apple-touch-icon.png",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   creator: "@enginux",
  // },
  manifest: `${siteConfig.url}/images/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: 'black',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-inter antialiased",
            fontInter.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
              <ScrollToTop />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
