import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import projectsData, { ProjectType } from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

type Filter = 'all' | ProjectType

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'work', label: 'Work' },
  { id: 'personal', label: 'Personal' },
]

export default function Projects() {
  const [active, setActive] = useState<Filter>('all')
  const visible = active === 'all' ? projectsData : projectsData.filter((p) => p.type === active)

  return (
    <>
      <PageSEO title={`Projects — ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="site-container">
        <section className="projects-hero hero-load">
          <span className="eyebrow">01 · work</span>
          <h1 className="projects-headline">
            Things I've <span className="italic-accent">built</span>.
          </h1>
          <p className="projects-lede">
            Nine years of shipping production software — from small Firebase prototypes to
            full-stack Vue.js apps and enterprise platforms at Nice CXone. A selection below.
          </p>
          <div className="projects-filter" role="tablist" aria-label="Project filter">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={active === f.id}
                className={`chip cat ${active === f.id ? 'is-active' : ''}`}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        <section className="projects-grid stagger reveal">
          {visible.length === 0 ? (
            <p className="projects-empty">
              <span className="italic-accent">Nothing here yet.</span>
            </p>
          ) : (
            visible.map((p) => (
              <Card
                key={p.title}
                title={p.title}
                description={p.description}
                imgSrc={p.imgSrc}
                href={p.href}
                role={p.role}
                tags={p.tags}
                repo={p.repo}
              />
            ))
          )}
        </section>
      </div>

      <style jsx>{`
        .projects-hero {
          padding: 80px 0 56px;
          max-width: 760px;
        }
        .projects-headline {
          font-family: 'Geist', sans-serif;
          font-weight: 500;
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 22px 0 18px;
          color: var(--text);
        }
        .projects-lede {
          font-size: 18px;
          line-height: 1.65;
          color: var(--text-muted);
          margin: 0 0 28px;
        }
        .projects-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .projects-filter :global(.chip) {
          cursor: pointer;
        }
        .projects-grid {
          padding: 24px 0 120px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .projects-empty {
          grid-column: 1 / -1;
          text-align: center;
          font-family: 'Instrument Serif', serif;
          font-size: 32px;
          color: var(--text-faint);
          padding: 80px 0;
        }
        @media (max-width: 900px) {
          .projects-hero {
            padding: 56px 0 36px;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            padding: 12px 0 80px;
          }
        }
      `}</style>
    </>
  )
}
