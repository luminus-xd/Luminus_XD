import { getDomain } from '@/libs/utils';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';

type Props = {
  articleId: string;
  articleTitle: string;
};

/**
 * 記事をX（旧ツイッター）にツイートするボタン
 * @returns
 */
export default function ShareButton({ articleId, articleTitle }: Props) {
  const domain = getDomain();
  return (
    <Link
      className={styles.shareButton}
      href={`https://twitter.com/intent/tweet?text=${articleTitle}&url=${domain}/articles/${articleId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className={styles.twitterX}
        src="/images/twitter-x-logo.svg"
        alt="記事をツイートする"
        width={40}
        height={40}
      />
      <Image
        className={styles.twitterX}
        src="/images/twitter-x-logo-black.svg"
        alt=""
        width={40}
        height={40}
        aria-hidden="true"
        data-clone="true"
      />
      <span className={styles.shareButtonText}>記事をツイートする</span>
    </Link>
  );
}
