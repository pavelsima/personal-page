import { useEffect, useState, ReactNode } from 'react'
import { Comments } from 'pliny/comments'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/master/data/${path}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop
      const height = h.scrollHeight - h.clientHeight
      setProgress(height > 0 ? Math.min(100, (scrolled / height) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="reading-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags, summary, readingTime } = content as CoreContent<Blog> & {
    readingTime?: { text: string }
  }
  const basePath = path.split('/')[0]
  const [loadComments, setLoadComments] = useState(false)
  const primaryTag = tags && tags[0]

  return (
    <>
      <BlogSEO url={`${siteMetadata.siteUrl}/${path}`} authorDetails={authorDetails} {...content} />
      <ReadingProgress />
      <ScrollTopAndComment />

      <div className="site-container">
        <article>
          <header className="post-header">
            <div className="post-meta-row">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
              {readingTime?.text && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{readingTime.text}</span>
                </>
              )}
              {primaryTag && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="primary-tag">{primaryTag}</span>
                </>
              )}
            </div>
            <h1 className="post-title">{title}</h1>
            {summary && <p className="post-lede">{summary}</p>}
            {tags && tags.length > 0 && (
              <div className="post-tags">
                {tags.map((t) => (
                  <span key={t} className="chip chip-sm">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="post-body prose prose-pavel">{children}</div>

          <div className="post-extras">
            <Link href={editUrl(filePath)}>
              <a className="more-link">
                View on GitHub <span className="arrow">↗</span>
              </a>
            </Link>
          </div>

          {siteMetadata.comments && (
            <div className="post-comments" id="comment">
              {!loadComments && (
                <button className="btn" onClick={() => setLoadComments(true)}>
                  Load Comments
                </button>
              )}
              {loadComments && <Comments commentsConfig={siteMetadata.comments} slug={slug} />}
            </div>
          )}

          <footer className="post-footer">
            {(prev || next) && (
              <nav className="post-prevnext" aria-label="Other articles">
                {prev && (
                  <Link href={`/${prev.path}`}>
                    <a className="glass-card lifts pn-card">
                      <span className="pn-label">← Previous</span>
                      <span className="pn-title">{prev.title}</span>
                    </a>
                  </Link>
                )}
                {next && (
                  <Link href={`/${next.path}`}>
                    <a className="glass-card lifts pn-card pn-card-next">
                      <span className="pn-label">Next →</span>
                      <span className="pn-title">{next.title}</span>
                    </a>
                  </Link>
                )}
              </nav>
            )}
            <div className="post-back">
              <Link href={`/${basePath}`}>
                <a className="more-link">
                  <span className="arrow">←</span> All posts
                </a>
              </Link>
            </div>
          </footer>
        </article>
      </div>

      <style jsx>{`
        article {
          max-width: 760px;
          margin: 0 auto;
          padding: 32px 0 80px;
        }
        .post-header {
          padding: 24px 0 48px;
          text-align: center;
        }
        .post-meta-row {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-family: 'Geist Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--text-faint);
          padding: 6px 14px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--glass);
        }
        .post-meta-row .primary-tag {
          color: var(--accent);
        }
        .post-title {
          font-family: 'Geist', sans-serif;
          font-weight: 500;
          font-size: clamp(36px, 5.4vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--text);
          margin: 24px 0 16px;
        }
        .post-lede {
          font-size: 19px;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 620px;
          margin: 0 auto 24px;
        }
        .post-tags {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
        }
        .post-body {
          padding: 32px 0;
          font-size: 18px;
          line-height: 1.75;
          color: var(--text-muted);
        }
        .post-extras {
          padding: 24px 0 12px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: flex-end;
        }
        .post-comments {
          padding: 24px 0;
          text-align: center;
        }
        .post-footer {
          padding: 32px 0 0;
        }
        .post-prevnext {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        .pn-card {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-decoration: none;
          color: inherit;
        }
        .pn-card-next {
          text-align: right;
        }
        .pn-label {
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--text-faint);
        }
        .pn-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--text);
          line-height: 1.3;
        }
        .post-back {
          padding-top: 16px;
        }
        @media (max-width: 640px) {
          article {
            padding: 16px 0 56px;
          }
          .post-prevnext {
            grid-template-columns: 1fr;
          }
          .pn-card-next {
            text-align: left;
          }
        }
      `}</style>
    </>
  )
}
