'use client';

import { TocEntry } from '@/libs/utils';
import useMediaQuery from '@/libs/useMediaQuery';
import styles from './index.module.css';
import { MD_BREAKPOINT } from '@/constants';

type Props = {
  toc: TocEntry[];
};

export default function TableOfContents({ toc }: Props) {
  const isTablet = useMediaQuery(`(max-width: ${MD_BREAKPOINT}px)`);

  return (
    <nav className={styles.toc} aria-labelledby="toc">
      <details open={!isTablet}>
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
