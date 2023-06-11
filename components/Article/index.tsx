import { formatRichText, renderToc } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../Date';
import styles from './index.module.css';
import TagList from '../TagList';
import ButtonLink from '../ButtonLink';
import TableOfContents from '../TableOfContents';

type Props = {
  data: Article;
};

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
            srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=540 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=540&dpr=2 2x`}
          />
          <img
            src={data.thumbnail?.url}
            alt=""
            className={styles.thumbnailFront}
            width={data.thumbnail?.width}
            height={data.thumbnail?.height}
          />
        </picture>
        <picture className={styles.thumbnailBlur}>
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={`${data.thumbnail?.url}?fm=webp&w=414&q=10 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2&q=10 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=540&q=10 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=540&dpr=2&q=10 2x`}
          />
          <img
            src={`${data.thumbnail?.url}?q=10`}
            alt=""
            className={styles.thumbnail}
            width={data.thumbnail?.width}
            height={data.thumbnail?.height}
            loading="eager"
          />
        </picture>
      </div>
      <div className={styles.column}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(data.content)}`,
          }}
        />
        <div className={styles.toc}>
          {data.tocVisible && (
            <div className={styles.tocContainer}>
              <TableOfContents toc={toc} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.topButton}>
        <ButtonLink />
      </div>
    </article>
  );
}
