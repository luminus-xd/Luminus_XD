import { getTag } from '@/libs/microcms';
import TagListItem from '@/components/TagListItem';
import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

/**
 * タグ一覧ページのレイアウト
 * @param children page.tsxで構築されているnode
 * @param params.tagId タグのid
 * @returns
 */
export default async function TagsLayout({ children, params }: Props) {
  const { tagId } = params;
  const tag = await getTag(tagId);
  return (
    <div>
      <p className={styles.title}>
        <TagListItem tag={tag} hasLink={false} />
        の記事一覧
      </p>
      <div>{children}</div>
    </div>
  );
}
