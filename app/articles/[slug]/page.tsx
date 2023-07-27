import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import { Article as JsonLDArticle, WebPage as JsonLDWebPage, WithContext } from 'schema-dts';
import Article from '@/components/Article';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { getDomain } from '@/libs/utils';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
  };
}

/**
 * 記事の詳細ページ
 * @param params.slug 記事のid
 * @param searchParams.dk 記事の下書きキー
 * @returns
 */
export default async function Page({ params, searchParams }: Props) {
  const domain = getDomain();
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  /**
   * 構造化データ
   */
  const jsonLd: WithContext<JsonLDArticle | JsonLDWebPage> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: data.title,
    headline: data.title,
    description: data.description,
    image: `${data.thumbnail?.url}?fm=webp&fit=crop&w=1200&h=630`,
    datePublished: data.publishedAt,
    dateModified: data.updatedAt,
    url: `${domain}/articles/${data.id}`,
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
      <Article data={data} />
      <ScrollProgressBar />
    </>
  );
}
