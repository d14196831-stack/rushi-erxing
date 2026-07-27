import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://d14196831-stack.github.io/rushi-erxing/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "如实而行，各自成林",
  description:
    "一套从诚实出发，在选择与关系里长成的思想：不瞒自己，也不躲开事实；把方向握在手里，把说过的话做进现实；有了力量，仍然把人当人。",
  applicationName: "如实而行，各自成林",
  authors: [{ name: "树林" }],
  keywords: ["如实而行", "各自成林", "诚实", "选择", "关系", "成长"],
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    title: "如实而行，各自成林",
    description: "一套从诚实出发，在选择与关系里长成的思想。",
    images: [
      {
        url: `${siteUrl}og.jpg`,
        width: 1728,
        height: 903,
        alt: "如实而行，各自成林",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "如实而行，各自成林",
    description: "一套从诚实出发，在选择与关系里长成的思想。",
    images: [`${siteUrl}og.jpg`],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f3ea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
