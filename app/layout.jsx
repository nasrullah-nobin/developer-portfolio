import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Nobin Hossen Anam | MERN Stack Developer",

  description:
    "Portfolio of Nobin Hossen Anam — a MERN Stack Developer focused on building modern, scalable, and user-friendly web applications using MongoDB, Express.js, React, Next.js, and Node.js.",

  keywords: [
    "Nobin Hossen Anam",
    "Nobin Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Bangladesh Developer",
    "Portfolio Website",
    "Web Developer",
  ],

  authors: [
    {
      name: "Nobin Hossen Anam",
    },
  ],

  creator: "Nobin Hossen Anam",

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "Nobin Hossen Anam | MERN Stack Developer",

    description:
      "Explore the portfolio of Nobin Hossen Anam — building modern full-stack web applications with MERN stack technologies.",

    url: "https://your-domain.com",

    siteName: "Nobin Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nobin Hossen Anam Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Nobin Hossen Anam | MERN Stack Developer",

    description:
      "Modern MERN stack portfolio showcasing projects, skills, and development journey.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
