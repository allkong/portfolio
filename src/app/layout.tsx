import type { Metadata } from 'next';
import { Special_Elite } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const suit = localFont({
  src: '../../public/fonts/SUIT-Variable.woff2',
  variable: '--font-suit',
});

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-special-elite',
});

export const metadata: Metadata = {
  title: '정다빈 | 포트폴리오',
  description: '프론트엔드 개발자 정다빈의 포트폴리오 사이트',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={`${suit.variable} ${specialElite.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
