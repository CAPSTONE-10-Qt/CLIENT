import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { AuthProvider } from "./api/auth/[...nextauth]";
import ReactQueryProviders from "@service/hooks";
import RecoilRootWrapper from "@store/.";
import ThemeProvier from "@styles/.";
import Header from "@components/Header";

import "@styles/globals.scss";
import "@styles/reset.scss";

const Pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  weight: "400 600",
});

export const metadata: Metadata = {
  title: "iterview",
  description: "잇터뷰 : IT 취준생을 위한 CS 기술 구두 면접 대비 & 학습 플랫폼",
  applicationName: "iterview",
  metadataBase: new URL("https://iterview.vercel.app"),
  authors: [
    {
      name: "이화여자대학교 졸업프로젝트 24-1 그로쓰 10팀 Qt",
      url: "https://github.com/TEAM-ITERVIEW",
    },
  ],
  icons: {
    icon: [
      // "/favicon.ico",
      {
        type: "image/png",
        media: "(prefers-color-scheme: light)",
        url: "/favicon_light.png",
      },
      {
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
        url: "/favicon_dark.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://iterview.vercel.app",
    title: "iterview",
    description:
      "잇터뷰 : IT 취준생을 위한 CS 기술 구두 면접 대비 & 학습 플랫폼",
    siteName: "iterview",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://iterview.vercel.app",
    creator: "",
    images: "/twitter-image.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#333333",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={Pretendard.className}>
        <AuthProvider>
          <ReactQueryProviders>
            <RecoilRootWrapper>
              <ThemeProvier>
                <Header />
                {children}
              </ThemeProvier>
            </RecoilRootWrapper>
          </ReactQueryProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
