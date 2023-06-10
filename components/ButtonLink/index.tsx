import Link from 'next/link';
import styles from './index.module.css';

export default function ButtonLink() {
  return (
    <Link className={styles.link} href="/">
      <span>トップページに戻る</span>
    </Link>
  );
}
