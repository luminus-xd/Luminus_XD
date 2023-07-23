import { TocEntry } from '@/libs/utils';
import styles from './index.module.css';

type Props = {
  toc: TocEntry[];
};

export default function TableOfContents({ toc }: Props) {
  return (
    <nav className={styles.toc} aria-labelledby="toc">
      <details open>
        <summary id={`toc`} className={styles.tocTitle}>
          目次
        </summary>
        <ul className={styles.tocList}>
          {toc.map((data) => (
            <li key={data.id}>
              <a className={styles.tocLink} data-heading-type={data.name} href={`#${data.id}`}>
                <span className={styles.tocLinkInner}>{data.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
