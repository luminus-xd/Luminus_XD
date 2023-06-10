import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.headerTitle}>Luminus</h1>
      </Link>
    </header>
  );
}
