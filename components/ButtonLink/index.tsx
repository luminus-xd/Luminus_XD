import Link from 'next/link';
import styles from './index.module.css';

/**
 * Button型のリンクコンポーネント
 * [WIP] テキストとリンク先を受け取るようにする
 * [WIP] 別タブに飛ばすかどうかを受け取るようにする
 * @returns
 */
export default function ButtonLink() {
  return (
    <Link className={styles.link} href="/">
      <span>トップページに戻る</span>
    </Link>
  );
}
