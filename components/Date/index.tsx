import Image from 'next/image';
import { formatDate } from '@/libs/utils';
import styles from './index.module.css';

type Props = {
  date: string;
};

/**
 * 記事の公開日を表示するコンポーネント
 * @param date 公開日
 * @returns
 */
export default function PublishedDate({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  );
}
