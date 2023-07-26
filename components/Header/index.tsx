import Link from 'next/link';
import styles from './index.module.css';

/**
 * ヘッダーのコンポーネント
 * @returns
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link href="/">
          <h1 className={styles.headerTitle}>Luminus</h1>
        </Link>
        <span className={styles.headerTitleShadow} aria-hidden="true">
          Luminus
        </span>
      </div>
    </header>
  );
}
