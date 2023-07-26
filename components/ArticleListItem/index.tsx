import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms';
import styles from './index.module.css';
import TagList from '../TagList';
import PublishedDate from '../Date';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={styles.list}>
      <Link href={`/articles/${article.id}`} className={styles.link}>
        {article.thumbnail ? (
          <div className={styles.thumbnail}>
            <picture className={styles.thumbnailFront}>
              <source
                type="image/webp"
                media="(max-width: 640px)"
                srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
              />
              <source
                type="image/webp"
                srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
              />
              <img
                src={article.thumbnail?.url || `/noimage.png`}
                alt=""
                className={styles.image}
                width={article.thumbnail?.width}
                height={article.thumbnail?.height}
                decoding="async"
              />
            </picture>
            <picture className={styles.thumbnailBlur}>
              <source
                type="image/webp"
                media="(max-width: 640px)"
                srcSet={`${article.thumbnail?.url}?fm=webp&w=41&q=10 1x, ${article.thumbnail?.url}?fm=webp&w=41&q=10 2x`}
              />
              <source
                type="image/webp"
                srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=24&h=12&q=10 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=24&h=12&q=10 2x`}
              />
              <img
                src={`${article.thumbnail?.url}?q=10` || `/noimage.png`}
                alt=""
                className={styles.image}
                width={article.thumbnail?.width}
                height={article.thumbnail?.height}
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        ) : (
          <Image
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )}
        <dl className={styles.content}>
          <dt className={styles.title}>{article.title}</dt>
          <dd>
            <TagList tags={article.tags} hasLink={false} />
          </dd>
          <dd className={styles.date}>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
