import Link from 'next/link';
import { Tag } from '@/libs/microcms';
import styles from './index.module.css';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

export default function TagListItem({ tag, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <Link href={`/tags/${tag.id}`} className={styles.tag}>
        #{tag.name}
      </Link>
    );
  } else {
    return (
      <span className={styles.tag} data-hover-interaction="false">
        #{tag.name}
      </span>
    );
  }
}
