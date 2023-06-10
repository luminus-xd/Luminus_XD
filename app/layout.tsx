import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Luminus',
  description: '好きなものについて',
  openGraph: {
    title: 'Luminus',
    description: '好きなものについて',
    images: '/ogp.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luminus',
    domain: 'luminus.dev',
    images: '/ogp.png',
  },
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
      <body className={inter.className}>
        <Header />
        <Nav tags={tags.contents} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
