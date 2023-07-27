import { getList, getTagList } from '@/libs/microcms';

export default async function sitemap() {
  const allPosts = await getList();
  const allTags = await getTagList();

  const posts = allPosts.contents.map((post) => ({
    url: `https://luminus.dev/articles/${post.id}`,
    lastModified: post.createdAt,
  }));

  const tags = allTags.contents.map((tag) => ({
    url: `https://luminus.dev/tags/${tag.id}`,
    lastModified: tag.createdAt,
  }));

  const routes = ['', '/search'].map((route) => ({
    url: `https://luminus.dev${route}`,
    lastModified: route === '' ? '2023-06-10T09:49:37.543Z' : new Date().toISOString(),
  }));

  return [...routes, ...tags, ...posts];
}
