import { formatRichText, renderToc } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../Date';
import styles from './index.module.css';
import TagList from '../TagList';
import ButtonLink from '../ButtonLink';
import ShareButton from '../ShareButton';
import TableOfContents from '../TableOfContents';

type Props = {
  data: Article;
};

/**
 * 記事のコンポーネント
 * microCMSから取得したデータを受け取り、記事を表示する
 * @param data 記事データ
 * @returns
 */
export default function Article({ data }: Props) {
  const toc = renderToc(data.content);
  return (
    <article className={styles.main}>
      <h1 className={styles.title}>{data.title}</h1>
      <TagList tags={data.tags} />
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        {data.writer && (
          <div className={styles.writer}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48 1x, ${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
              />
              <img
                src={data.writer?.image?.url}
                alt=""
                className={styles.writerIcon}
                width={data.writer?.image?.width}
                height={data.writer?.image?.height}
                decoding="async"
              />
            </picture>
            <span className={styles.writerName}>{data.writer?.name}</span>
          </div>
        )}
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <div className={styles.thumbnail}>
        <picture>
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=1200&h=630 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=1200&h=630&dpr=2 2x`}
          />
          <img
            src={data.thumbnail?.url}
            alt=""
            className={styles.thumbnailFront}
            width={data.thumbnail?.width}
            height={data.thumbnail?.height}
            decoding="async"
          />
        </picture>
        <picture className={styles.thumbnailBlur}>
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={`${data.thumbnail?.url}?fm=webp&w=41&q=10 1x, ${data.thumbnail?.url}?fm=webp&w=41&dpr=2&q=10 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=120&h=63&q=10 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=120&h=63&q=10 2x`}
          />
          <img
            src={`${data.thumbnail?.url}?q=10`}
            alt=""
            className={styles.thumbnail}
            width={data.thumbnail?.width}
            height={data.thumbnail?.height}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
      <div className={styles.column}>
        <div className={styles.content}>
          <div
            className={styles.cms}
            dangerouslySetInnerHTML={{
              __html: `${formatRichText(data.content)}`,
            }}
          />
          <div className={styles.twitterShareBlock}>
            <ShareButton articleId={data.id} articleTitle={data.title} />
          </div>
        </div>
        {data.tocVisible && (
          <div className={styles.toc}>
            <div className={styles.tocContainer}>
              <TableOfContents toc={toc} />
            </div>
          </div>
        )}
      </div>
      <div className={styles.topButton}>
        <ButtonLink />
      </div>
    </article>
  );
}
