import { memo } from 'react';
import { Tag } from '@/libs/microcms';
import TagListItem from '../TagListItem';
import styles from './index.module.css';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

/**
 * タグの一覧を表示するコンポーネント
 * @param tags 全てのタグ
 * @param hasLink リンクを付けるかどうか
 * @returns
 */
export function TagList({ tags, hasLink = true }: Props) {
  if (!tags) {
    return null;
  }
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
}

export default memo(TagList);
