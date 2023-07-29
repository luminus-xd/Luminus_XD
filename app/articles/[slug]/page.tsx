import { Metadata } from 'next';
import { getDetail, getList } from '@/libs/microcms';
import { Article as JsonLDArticle, WebPage as JsonLDWebPage, WithContext } from 'schema-dts';
import Article from '@/components/Article';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { getDomain } from '@/libs/utils';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug);

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

export async function generateStaticParams() {
  const posts = await getList();

  return posts.contents.map((post) => ({
    params: {
      slug: post.id,
    },
  }));
}

/**
 * 記事の詳細ページ
 * @param params.slug 記事のid
 * @returns
 */
export default async function Page({ params }: Props) {
  const { slug } = params;
  const domain = getDomain();
  const data = await getDetail(slug, {});

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
