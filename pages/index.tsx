import { PageSEO } from '@/components/SEO'
import AuthorIndex from '@/layouts/AuthorIndex'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent, coreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)
  const authorRaw = allAuthors.find((p) => p.slug === 'default')
  const author = coreContent(authorRaw)

  return { props: { posts, author } }
}

export default function Home({ posts, author }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <AuthorIndex content={author} posts={posts} />
    </>
  )
}
