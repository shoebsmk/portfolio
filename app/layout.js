import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import { personalData } from "@/utils/data/personal-data";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shoeb Khan - Software Engineer | Full Stack Developer | Mobile Architect",
    template: "%s | Shoeb Khan Portfolio"
  },
  description:
    "Software developer with five years of experience creating modern, intuitive mobile and web experiences. Specializing in robust mobile architectures, CI/CD pipelines on AWS, and high-performance user experiences.",
  keywords: [
    "Shoeb Khan",
    "Software Engineer",
    "Full Stack Developer",
    "Mobile Architect",
    "React",
    "Next.js",
    "Flutter",
    "Android",
    "iOS",
    "AWS",
    "Python",
    "Java",
    "Portfolio",
    "Web Developer",
    "Mobile Developer"
  ],
  authors: [{ name: "Shoeb Khan" }],
  creator: "Shoeb Khan",
  publisher: "Shoeb Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Shoeb Khan Portfolio",
    title: "Shoeb Khan - Software Engineer | Full Stack Developer | Mobile Architect",
    description:
      "Software developer with five years of experience creating modern, intuitive mobile and web experiences. Specializing in robust mobile architectures, CI/CD pipelines on AWS, and high-performance user experiences.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Shoeb Khan - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoeb Khan - Software Engineer | Full Stack Developer | Mobile Architect",
    description:
      "Software developer with five years of experience creating modern, intuitive mobile and web experiences.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@shoebsmk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.name,
    "jobTitle": personalData.designation,
    "description": personalData.description,
    "url": siteUrl,
    "email": personalData.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personalData.address,
    },
    "sameAs": [
      personalData.github,
      personalData.linkedIn,
    ].filter(Boolean),
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#16f2b3] focus:text-[#0d1224] focus:rounded-md focus:font-semibold"
          aria-label="Skip to main content">
          Skip to main content
        </a>
        <ToastContainer />
        <main id="main-content" className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
