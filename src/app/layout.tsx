import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import RecoilRootWrapper from "@store/.";
import ThemeProvier from "@styles/.";
import Header from "@components/Header";

import "@styles/globals.scss";
import "@styles/reset.scss";

const Pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "iterview",
  description: "IT 취준생을 위한 CS 기술 구두 면접 대비 & 학습 플랫폼",
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
    <html lang='en'>
      <body className={Pretendard.className}>
        <RecoilRootWrapper>
          <ThemeProvier>
            <Header />
            {children}
          </ThemeProvier>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
