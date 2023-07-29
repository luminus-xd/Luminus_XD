import { getList, getTag } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';

type Props = {
  params: {
    tagId: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const tags = await getList({
    limit: LIMIT,
  });

  return tags.contents.map((tag) => ({
    params: {
      tagId: tag.id,
    },
  }));
}

/**
 * タグで絞り込んだ記事一覧ページ
 * @param params.tagId タグのid
 * @returns
 */
export default async function Page({ params }: Props) {
  const { tagId } = params;
  const data = await getList({
    limit: LIMIT,
    filters: `tags[contains]${tagId}`,
  });
  const tag = await getTag(tagId);
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath={`/tags/${tagId}`} />
    </>
  );
}
