import type { Metadata } from "next";
import localFont from "next/font/local";
import "./_styles/globals.scss";
import "./_styles/reset.scss";

export const metadata: Metadata = {
  title: "잇터뷰",
  description: "IT 취준생을 위한 CS 기술 구두 면접 대비 & 학습 플랫폼",
};

export const Pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={Pretendard.className}>{children}</body>
    </html>
  );
}
