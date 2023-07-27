import { Analytics } from '@vercel/analytics/react';
import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import { Inter, Zen_Kaku_Gothic_New } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';

/**
 * Google Fonts Inter
 */
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
/**
 * Google Fonts Zen Kaku Gothic New
 */
const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-kaku-gothic-new',
});

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Luminus',
  description: '趣味のフロントエンド技術やゲームなどについて感想を書いていくブログ',
  icons: {
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Luminus',
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'Luminus',
    description: '趣味のフロントエンド技術やゲームなどについて感想を書いていくブログ',
    images: '/ogp-luminus.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luminus',
    domain: 'luminus.dev',
    images: '/ogp-luminus.png',
    creator: '@midnight_dev2',
  },
  themeColor: '#000000',
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${ZenKakuGothicNew.variable}`}>
        <Header />
        <Nav tags={tags.contents} />
        <main className={styles.main}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
