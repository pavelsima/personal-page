import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  eyebrow?: string
  headline?: string
  lede?: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const router = useRouter()
  const basePath = router.pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <nav className="pagination" aria-label="Blog pagination">
      {prevPage ? (
        <Link
          href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
        >
          <a className="btn">← Previous</a>
        </Link>
      ) : (
        <span className="btn is-disabled" aria-disabled="true">
          ← Previous
        </span>
      )}
      <span className="pagination-count">
        {currentPage} of {totalPages}
      </span>
      {nextPage ? (
        <Link href={`/${basePath}/page/${currentPage + 1}`}>
          <a className="btn">Next →</a>
        </Link>
      ) : (
        <span className="btn is-disabled" aria-disabled="true">
          Next →
        </span>
      )}
      <style jsx>{`
        .pagination {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 32px 0 80px;
        }
        .pagination-count {
          font-family: 'Geist Mono', monospace;
          font-size: 12px;
          color: var(--text-muted);
        }
        .is-disabled {
          opacity: 0.4;
          pointer-events: none;
        }
      `}</style>
    </nav>
  )
}

function groupByYear(posts: CoreContent<Blog>[]) {
  const groups = new Map<number, CoreContent<Blog>[]>()
  posts.forEach((p) => {
    const year = new Date(p.date).getUTCFullYear()
    if (!groups.has(year)) groups.set(year, [])
    groups.get(year)!.push(p)
  })
  return Array.from(groups.entries()).sort((a, b) => b[0] - a[0])
}

export default function ListLayout({
  posts,
  title,
  eyebrow,
  headline,
  lede,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const renderedEyebrow = eyebrow ?? '02 · writing'
  const renderedHeadlineText = headline ?? (title === 'All Posts' ? 'Writing' : title)
  const renderedLede =
    lede ??
    "Notes on building software, AI-driven development, and whatever's caught my attention."
  const [searchValue, setSearchValue] = useState('')
  const filtered = useMemo(
    () =>
      posts.filter((post) => {
        const haystack = (post.title + post.summary + post.tags.join(' ')).toLowerCase()
        return haystack.includes(searchValue.toLowerCase())
      }),
    [posts, searchValue]
  )
  const display = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filtered
  const grouped = useMemo(() => groupByYear(display), [display])

  return (
    <div className="site-container">
      <section className="blog-hero hero-load">
        <span className="eyebrow">{renderedEyebrow}</span>
        <h1 className="blog-headline">
          <span className="italic-accent">{renderedHeadlineText}</span>
        </h1>
        <p className="blog-lede">{renderedLede}</p>
        <div className="blog-search">
          <input
            aria-label="Search articles"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles…"
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </section>

      <section className="blog-list reveal">
        {!filtered.length && (
          <p className="blog-empty">
            <span className="italic-accent">Nothing matches.</span>
          </p>
        )}
        {grouped.map(([year, items]) => (
          <div key={year} className="year-group">
            <h2 className="year-heading">{year}</h2>
            <ul className="year-rows">
              {items.map((post) => {
                const { path, date, title: postTitle, summary, tags } = post
                const shortDate = new Date(date).toLocaleDateString(siteMetadata.locale, {
                  month: 'short',
                  day: 'numeric',
                })
                return (
                  <li key={path}>
                    <Link href={`/${path}`}>
                      <a className="post-row">
                        <div className="post-meta">
                          <span className="post-date">{shortDate}</span>
                          <div className="post-tags">
                            {tags.slice(0, 3).map((t) => (
                              <span key={t}>{t}</span>
                            ))}
                          </div>
                          <span className="sr-only">
                            <time dateTime={date}>
                              {formatDate(date, siteMetadata.locale)}
                            </time>
                          </span>
                        </div>
                        <div className="post-body">
                          <h3 className="post-title">{postTitle}</h3>
                          <p className="post-excerpt">{summary}</p>
                        </div>
                        <span className="post-arrow arrow" aria-hidden="true">
                          →
                        </span>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </section>

      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}

      <style jsx>{`
        .blog-hero {
          padding: 80px 0 56px;
          max-width: 760px;
        }
        .blog-headline {
          font-family: 'Geist', sans-serif;
          font-weight: 500;
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 22px 0 18px;
          color: var(--text);
        }
        .blog-lede {
          font-size: 18px;
          line-height: 1.65;
          color: var(--text-muted);
          margin: 0 0 28px;
        }
        .blog-search {
          position: relative;
          max-width: 480px;
        }
        .blog-search input {
          width: 100%;
          padding: 12px 44px 12px 18px;
          border-radius: 999px;
          border: 1px solid var(--border-strong);
          background: var(--glass);
          backdrop-filter: blur(14px);
          color: var(--text);
          font-size: 14px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .blog-search input::placeholder {
          color: var(--text-faint);
        }
        .blog-search input:focus {
          outline: none;
          border-color: var(--accent);
          background: var(--glass-strong);
        }
        .blog-search svg {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          color: var(--text-faint);
          pointer-events: none;
        }

        .blog-list {
          padding: 32px 0 24px;
        }
        .blog-empty {
          text-align: center;
          font-family: 'Instrument Serif', serif;
          font-size: 32px;
          color: var(--text-faint);
          padding: 80px 0;
        }
        .year-group {
          margin-bottom: 40px;
        }
        .year-heading {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 56px;
          color: var(--text-faint);
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }
        .year-rows {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .post-row {
          display: grid;
          grid-template-columns: 160px 1fr 40px;
          gap: 24px;
          align-items: start;
          padding: 28px 4px;
          border-bottom: 1px solid var(--border);
          color: inherit;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .post-row:hover {
          background: var(--glass);
        }
        .post-row:hover .post-title {
          color: var(--accent);
        }
        .post-row:hover .post-arrow {
          color: var(--accent);
          transform: translateX(4px);
        }
        .post-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 4px;
        }
        .post-date {
          font-family: 'Geist Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--text-faint);
          text-transform: uppercase;
        }
        .post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .post-tags span {
          font-family: 'Geist Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.04em;
          color: var(--text-faint);
          padding: 2px 7px;
          border: 1px solid var(--border);
          border-radius: 4px;
          text-transform: lowercase;
        }
        .post-title {
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.015em;
          line-height: 1.3;
          color: var(--text);
          margin: 0 0 8px;
          transition: color 0.2s ease;
        }
        .post-excerpt {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }
        .post-arrow {
          font-family: 'Geist Mono', monospace;
          font-size: 18px;
          color: var(--text-faint);
          padding-top: 4px;
          transition: color 0.2s ease, transform 0.3s ease;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (max-width: 900px) {
          .blog-hero {
            padding: 56px 0 32px;
          }
          .year-heading {
            font-size: 44px;
          }
          .post-row {
            grid-template-columns: 1fr 24px;
            gap: 16px;
          }
          .post-meta {
            grid-column: 1 / -1;
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}
