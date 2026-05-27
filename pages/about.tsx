import { InferGetStaticPropsType } from 'next'
import { allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import AuthorLayout from '@/layouts/AuthorLayout'

export const getStaticProps = async () => {
  const authorRaw = allAuthors.find((p) => p.slug === 'default')
  const author = coreContent(authorRaw)
  return { props: { author } }
}

export default function About({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <AuthorLayout content={author} />
}
