import { getList } from '@/libs/microcms';
import { Article as JsonLDArticle, WebPage as JsonLDWebPage, WithContext } from 'schema-dts';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import { getDomain } from '@/libs/utils';

export const revalidate = 0;

export default async function Page() {
  const domain = getDomain();
  const data = await getList({
    limit: LIMIT,
  });

  /**
   * 構造化データ
   */
  const jsonLd: WithContext<JsonLDArticle | JsonLDWebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Luminus',
    headline: 'Luminus',
    description: '趣味のフロントエンド技術やゲームなどについて感想を書いていくブログ',
    image: `/ogp-luminus.png`,
    datePublished: '2023-06-10T09:49:37.543Z',
    dateModified: new Date().toISOString(),
    url: `${domain}/`,
    mainEntityOfPage: `${domain}/`,
    author: {
      '@type': 'Person',
      name: 'Luminus',
      url: domain,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Luminus',
      logo: {
        '@type': 'ImageObject',
        url: `${domain}/pwa-icons/maskable_icon.png`,
      },
    },
  };

  return (
    <>
      <script
        key="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
