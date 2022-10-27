import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y pb-5 divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <div className="space-y-2 pt-3 pb-0 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Hello friend 👋
                </h1>
            </div>
            <p>
              Welcome on my personal page, my name is {name} - Software Developer from Prague, Czech
              Republic.
            </p>
            <p>
              I started with coding already before high school, now I have already more than 6 years
              of professional experience as frontend and full-stack developer.
            </p>
            <p>
              I am familiar with PHP, Python and C# on backend-side (and Firebase if you categorise
              it as backend technology), for frontend I often use Vue.JS, ReactJS, Tailwind, and lately
              I started with RedwoodJS.
            </p>
            <p>
              <Link className="no-underline" href="/about">
                🤔 More about me
              </Link>
              <br />
              <Link className="no-underline" href="/projects">
                🪛 What have I built?
              </Link>
              <br />
              <Link className="no-underline" href="/blog">
                🖊 My articles
              </Link>
            </p>
        </div>
        <div className="my-3 flex max-w-xs flex-col items-center space-x-2 overflow-hidden rounded-xl pt-2 px-2 pb-6 shadow-2xl shadow-gray-800">
            <Image
              src={avatar}
              alt="avatar"
              width="310px"
              height="300px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
