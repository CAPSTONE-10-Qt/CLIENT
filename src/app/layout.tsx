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
