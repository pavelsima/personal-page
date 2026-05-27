import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { kebabCase } from 'pliny/utils/kebabCase'
import { getAllTags } from 'pliny/utils/contentlayer'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'

export const getStaticProps: GetStaticProps<{ tags: Record<string, number> }> = async () => {
  const tags = await getAllTags(allBlogs)
  return { props: { tags } }
}

export default function Tags({ tags }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags — ${siteMetadata.author}`} description="Things I blog about" />
      <div className="site-container">
        <section className="tags-hero hero-load">
          <span className="eyebrow">02 · index · tags</span>
          <h1 className="tags-headline">
            Things I <span className="italic-accent">blog</span> about
          </h1>
          <p className="tags-lede">Browse the writing by topic.</p>
        </section>

        <section className="tags-list reveal stagger">
          {sortedTags.length === 0 && (
            <p className="tags-empty">
              <span className="italic-accent">No tags yet.</span>
            </p>
          )}
          {sortedTags.map((t) => (
            <Link key={t} href={`/tags/${kebabCase(t)}`}>
              <a className="tag-pill">
                <span className="tag-name">{t.split(' ').join('-')}</span>
                <span className="tag-count">{tags[t]}</span>
              </a>
            </Link>
          ))}
        </section>
      </div>

      <style jsx>{`
        .tags-hero {
          padding: 80px 0 48px;
          max-width: 760px;
        }
        .tags-headline {
          font-family: 'Geist', sans-serif;
          font-weight: 500;
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 22px 0 18px;
          color: var(--text);
        }
        .tags-lede {
          font-size: 18px;
          line-height: 1.65;
          color: var(--text-muted);
          margin: 0 0 28px;
        }
        .tags-list {
          padding: 24px 0 120px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--glass);
          backdrop-filter: blur(12px);
          color: var(--text);
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.34, 1.4, 0.64, 1), border-color 0.3s ease,
            color 0.3s ease;
        }
        .tag-pill:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          color: var(--accent);
        }
        .tag-count {
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          color: var(--text-faint);
        }
        .tag-pill:hover .tag-count {
          color: var(--accent);
        }
        .tags-empty {
          font-family: 'Instrument Serif', serif;
          font-size: 32px;
          color: var(--text-faint);
          padding: 40px 0;
        }
      `}</style>
    </>
  )
}
