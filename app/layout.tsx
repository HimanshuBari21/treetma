import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://treetma-chronicles.vercel.app"),
  title: "Treeatma: The Awakening of Nature | A Magical Ecological Saga",
  description: "Explore the legend of the Treeatma, ancient tree spirits bound to the forest. Read Kailash's final story of nature's awakening, ecological balance, and the stand against human expansion.",
  keywords: [
    "Treeatma",
    "Treetma",
    "Treeatma Chronicles",
    "Kailash kindergarten story",
    "magical tree spirits",
    "environmental saga",
    "ecological awareness story",
    "forest protection legend",
    "Lucy and Diz",
    "claymorphism web design"
  ],
  authors: [{ name: "Kailash", url: "https://treetma-chronicles.vercel.app" }],
  creator: "Treeatma Chronicles Team",
  publisher: "Treeatma Chronicles",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Treeatma: The Awakening of Nature | A Magical Ecological Saga",
    description: "Explore the legend of the Treeatma, ancient tree spirits bound to the forest. Read Kailash's final story of nature's awakening, ecological balance, and the stand against human expansion.",
    url: "https://treetma-chronicles.vercel.app/",
    siteName: "Treeatma Chronicles",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Treeatma Chronicles - A Magical Ecological Saga",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treeatma: The Awakening of Nature | A Magical Ecological Saga",
    description: "Explore the legend of the Treeatma, ancient tree spirits bound to the forest. Read Kailash's final story of nature's awakening, ecological balance, and the stand against human expansion.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://treetma-chronicles.vercel.app/#website",
        "url": "https://treetma-chronicles.vercel.app/",
        "name": "Treeatma Chronicles",
        "description": "Follow the legend of the Treeatma, ancient tree spirits who watch over the forest, as told on the final day of a beloved green kindergarten."
      },
      {
        "@type": "Book",
        "@id": "https://treetma-chronicles.vercel.app/#book",
        "name": "Treeatma: The Awakening of Nature",
        "headline": "A Magical Saga of Tree Spirits and Human Coexistence",
        "description": "On the final day of a humble kindergarten threatened by concrete giants, the elderly teacher Kailash shares one last legendary story of the Treeatmas—immortal nature spirits bound to trees.",
        "author": {
          "@type": "Person",
          "name": "Kailash"
        },
        "genre": "Fantasy, Ecological Fiction, Environmental Saga",
        "about": [
          {
            "@type": "Thing",
            "name": "Environmental Conservation"
          },
          {
            "@type": "Thing",
            "name": "Nature Spirits (Treeatma)"
          }
        ],
        "character": [
          {
            "@type": "Person",
            "name": "Lucy",
            "description": "An adventurous Treeatma bound to riverside trees."
          },
          {
            "@type": "Person",
            "name": "Diz",
            "description": "Lucy's close friend, a thoughtful Treeatma."
          },
          {
            "@type": "Person",
            "name": "Kailash",
            "description": "The elderly kindergarten teacher who holds the memory of the forest."
          },
          {
            "@type": "Person",
            "name": "Peter",
            "description": "An innocent child representing the future generation and audience."
          }
        ]
      },
      {
        "@type": "VideoObject",
        "name": "The Legend of Treetma: Infographic Explanation",
        "description": "A visual infographic breakdown explaining the origins of the Treeatmas, their branch-to-branch swapping mechanisms, and nature's ultimate stand.",
        "thumbnailUrl": "https://img.youtube.com/vi/W3p6RYzzK1E/maxresdefault.jpg",
        "uploadDate": "2026-06-06T20:56:25Z",
        "embedUrl": "https://www.youtube.com/embed/W3p6RYzzK1E"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
