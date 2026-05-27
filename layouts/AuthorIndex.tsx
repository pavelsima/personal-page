import { ReactNode } from 'react'
import Link from 'next/link'
import Image from '@/components/Image'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Authors, Blog } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

interface Props {
  children?: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
  posts: CoreContent<Blog>[]
}

export default function AuthorIndex({ content, posts }: Props) {
  const { name, avatar, email, twitter, linkedin, github } = content
  const youtube = siteMetadata.youtube

  return (
    <div className="site-container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-text hero-load">
          <span className="eyebrow">Frontend developer · Prague, CZ</span>
          <h1 className="headline">
            Hello, <span className="italic-accent">friend</span>{' '}
            <span className="wave" aria-hidden="true">
              👋
            </span>
          </h1>
          <p className="lede">
            I'm Pavel — primarily a <strong>frontend developer</strong> with 9+ years of
            professional experience, and <strong>Vue.js</strong> as my main stack. I can go{' '}
            <strong>full-stack</strong> when a project needs it — Node.js, Laravel, and the
            occasional Python or <strong>RedwoodJS</strong> on the side. <strong>React</strong> when
            the project asks for it. Lately I've been deep in AI-driven development with Cursor,
            Claude Code, and MCP.
          </p>
          <div className="cta-row">
            <Link href="/projects">
              <a className="btn primary">
                See projects <span className="arrow">→</span>
              </a>
            </Link>
            <Link href="/about">
              <a className="btn">About me</a>
            </Link>
            <a href={`mailto:${email}`} className="btn">
              Say hello
            </a>
          </div>
        </div>

        <aside className="avatar-card glass-card-lg hero-load-card">
          <div className="avatar-frame">
            <Image src={avatar} alt={name} layout="fill" objectFit="cover" className="avatar-img" />
          </div>
          <div className="avatar-meta">
            <div className="avatar-name">{name}</div>
            <div className="avatar-role">Senior Software Engineer</div>
            <span className="avatar-company">Nice CXone</span>
          </div>
          <div className="socials-mini">
            <a href={`mailto:${email}`} aria-label="Email">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a href={github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
            </a>
            <a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <a href={twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {youtube && (
              <a href={youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
                </svg>
              </a>
            )}
          </div>
        </aside>
      </section>

      {/* Stack */}
      <section className="reveal block" id="stack">
        <div>
          <div className="section-label">01 · stack</div>
          <h2 className="section-title">
            Tools I <em>actually</em> use
          </h2>
        </div>
        <div className="chips stagger" style={{ marginTop: '36px' }}>
          <span className="chip cat">frontend</span>
          <span className="chip">Vue.js</span>
          <span className="chip">React</span>
          <span className="chip">TypeScript</span>
          <span className="chip">Tailwind</span>
          <span className="chip">Capacitor</span>
          <span className="chip cat">backend</span>
          <span className="chip">Node.js</span>
          <span className="chip">Laravel</span>
          <span className="chip">Python (Django)</span>
          <span className="chip">Firebase</span>
          <span className="chip">RedwoodJS</span>
          <span className="chip">GraphQL</span>
          <span className="chip cat">ai &amp; tooling</span>
          <span className="chip">Claude</span>
          <span className="chip">Cursor</span>
          <span className="chip">MCP</span>
          <span className="chip">GitHub Copilot</span>
        </div>
      </section>

      {/* Writing */}
      <section className="reveal block" id="writing">
        <div className="section-head">
          <div>
            <div className="section-label">02 · writing</div>
            <h2 className="section-title">
              Recent <em>articles</em>
            </h2>
          </div>
          <Link href="/blog">
            <a className="more-link">
              All posts <span className="arrow">→</span>
            </a>
          </Link>
        </div>
        <div className="articles stagger">
          {posts.slice(0, 3).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <Link key={slug} href={`/blog/${slug}`}>
                <a className="article-card">
                  <span className="article-card-date">{formatDate(date, siteMetadata.locale)}</span>
                  <h3 className="article-card-title">{title}</h3>
                  <p className="article-card-excerpt">{summary}</p>
                  <div className="article-card-tags">
                    {tags.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Projects teaser */}
      <section className="reveal projects-teaser block" id="projects-teaser">
        <div className="section-head">
          <div>
            <div className="section-label">03 · work</div>
            <h2 className="section-title">
              Selected <em>projects</em>
            </h2>
          </div>
          <Link href="/projects">
            <a className="more-link">
              All work <span className="arrow">→</span>
            </a>
          </Link>
        </div>
        <div className="pt-grid">
          <div className="pt-text">
            <p>
              Nine years of shipping production software — from small Firebase prototypes to
              full-stack Vue apps and enterprise platforms at Nice CXone. Pick your poison.
            </p>
            <Link href="/projects">
              <a className="btn primary">
                Browse projects <span className="arrow">→</span>
              </a>
            </Link>
          </div>
          <div className="pt-visual">
            <div className="pt-visual-content">
              <div className="pt-numbers">
                <div className="pt-num">
                  <span className="n">9+</span>
                  <span className="l">years shipping</span>
                </div>
                <div className="pt-num">
                  <span className="n">15+</span>
                  <span className="l">tech in stack</span>
                </div>
              </div>
              <div className="pt-tags">
                <span>fullstack</span>
                <span>frontend</span>
                <span>ai-assisted</span>
                <span>opensource</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact reveal" id="contact">
        <div className="section-label" style={{ justifyContent: 'center' }}>
          04 · contact
        </div>
        <h2 className="contact-title">
          Say <em>hello</em> →
        </h2>
        <a href={`mailto:${email}`} className="email-link">
          {email}
          <span className="arrow">↗</span>
        </a>
        <div className="socials-big">
          <a href={github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
            </svg>
          </a>
          <a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </a>
          <a href={twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {youtube && (
            <a href={youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
              </svg>
            </a>
          )}
          <a href={`mailto:${email}`} aria-label="Email">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: 100px 0 140px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .headline {
          font-family: 'Geist', sans-serif;
          font-weight: 500;
          font-size: clamp(48px, 7vw, 84px);
          line-height: 1.02;
          letter-spacing: -0.035em;
          margin: 22px 0 24px;
          color: var(--text);
        }
        .lede {
          font-size: 18px;
          line-height: 1.65;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 0 36px;
        }
        .lede :global(strong) {
          color: var(--text);
          font-weight: 500;
        }
        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .avatar-card {
          position: relative;
        }
        .avatar-frame {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 22px;
          position: relative;
          background: var(--glass-strong);
        }
        .avatar-frame :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .avatar-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .avatar-name {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--text);
        }
        .avatar-role {
          font-size: 14px;
          color: var(--text-muted);
        }
        .avatar-company {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 5px 10px;
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          border: 1px solid var(--border);
          border-radius: 6px;
          align-self: flex-start;
        }
        .avatar-company::before {
          content: '@';
          color: var(--accent);
        }
        .socials-mini {
          display: flex;
          gap: 6px;
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px dashed var(--border-strong);
        }
        .socials-mini :global(a) {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: color 0.2s ease, background 0.2s ease,
            transform 0.3s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        .socials-mini :global(a:hover) {
          color: var(--text);
          background: var(--glass-strong);
          transform: translateY(-2px);
        }
        .socials-mini :global(svg) {
          width: 15px;
          height: 15px;
        }

        .block {
          padding: 80px 0;
        }
        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .articles {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .projects-teaser {
          padding: 80px 0 120px;
        }
        .pt-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: end;
        }
        .pt-text :global(p) {
          font-size: 17px;
          color: var(--text-muted);
          max-width: 480px;
          margin: 0 0 28px;
          line-height: 1.65;
        }
        .pt-visual {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 24px;
          border: 1px solid var(--border);
          background: var(--glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          overflow: hidden;
        }
        .pt-visual::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 25% 25%, var(--blob-1) 0%, transparent 50%),
            radial-gradient(circle at 75% 70%, var(--blob-2) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, var(--blob-3) 0%, transparent 60%);
          opacity: 0.55;
          filter: blur(20px);
        }
        .pt-visual-content {
          position: relative;
          z-index: 1;
          height: 100%;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .pt-numbers {
          display: flex;
          gap: 32px;
        }
        .pt-num {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pt-num .n {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-size: 52px;
          line-height: 1;
          color: var(--text);
          letter-spacing: -0.02em;
        }
        .pt-num .l {
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        .pt-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .pt-tags :global(span) {
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          padding: 4px 10px;
          border: 1px solid var(--border-strong);
          border-radius: 999px;
          color: var(--text-muted);
          background: var(--glass-strong);
        }

        .contact {
          padding: 120px 0 100px;
          text-align: center;
        }
        .contact .section-label {
          justify-content: center;
        }
        .contact-title {
          font-family: 'Geist', sans-serif;
          font-weight: 500;
          font-size: clamp(40px, 6vw, 72px);
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin: 0 0 32px;
          color: var(--text);
        }
        .contact-title :global(em) {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
        }
        .socials-big {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 40px;
        }
        .socials-big :global(a) {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          border: 1px solid transparent;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease,
            transform 0.3s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        .socials-big :global(a:hover) {
          color: var(--text);
          background: var(--glass);
          border-color: var(--border);
          transform: translateY(-3px);
        }
        .socials-big :global(svg) {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 56px;
            padding: 60px 0 100px;
          }
          .avatar-card {
            max-width: 380px;
            margin: 0 auto;
            width: 100%;
          }
          .block {
            padding: 64px 0;
          }
          .projects-teaser {
            padding: 64px 0 80px;
          }
          .contact {
            padding: 80px 0 64px;
          }
          .articles {
            grid-template-columns: 1fr;
          }
          .pt-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .hero {
            padding: 40px 0 64px;
            gap: 44px;
          }
          .lede {
            font-size: 17px;
            margin-bottom: 28px;
          }
          .cta-row {
            gap: 8px;
          }
          .block {
            padding: 56px 0;
          }
          .contact {
            padding: 64px 0 48px;
          }
          .pt-numbers {
            gap: 24px;
          }
          .pt-num .n {
            font-size: 44px;
          }
          .pt-visual-content {
            padding: 22px;
          }
        }
        @media (max-width: 420px) {
          .cta-row :global(.btn) {
            flex: 1;
            justify-content: center;
            min-width: 0;
          }
        }
      `}</style>
    </div>
  )
}
