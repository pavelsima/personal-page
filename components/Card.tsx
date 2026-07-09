import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  role?: string
  tags?: string[]
  repo?: string
}

const Card = ({ title, description, imgSrc, href, role, tags, repo }: CardProps) => {
  return (
    <article className="project-card">
      {imgSrc && (
        <div className="project-media">
          {href ? (
            <Link href={href} aria-label={`Open ${title}`}>
              <Image alt={title} src={imgSrc} width={544} height={306} className="project-img" />
            </Link>
          ) : (
            <Image alt={title} src={imgSrc} width={544} height={306} className="project-img" />
          )}
        </div>
      )}
      <div className="project-body">
        {role && <span className="project-role">{role}</span>}
        <h2 className="project-title">
          {href ? (
            <Link href={href} aria-label={`Open ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="project-desc">{description}</p>
        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((t) => (
              <span key={t} className="chip chip-sm">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="project-links">
          {href && (
            <Link href={href} className="more-link">
              Live <span className="arrow">→</span>
            </Link>
          )}
          {repo && (
            <Link href={repo} className="more-link">
              Repo <span className="arrow">→</span>
            </Link>
          )}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          position: relative;
          padding: 22px;
          border-radius: 24px;
          border: 1px solid var(--border);
          background: var(--glass);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition: transform 0.4s cubic-bezier(0.34, 1.4, 0.64, 1), border-color 0.4s ease,
            background 0.4s ease;
        }
        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-strong);
          background: var(--glass-strong);
        }
        .project-media {
          position: relative;
          aspect-ratio: 16 / 10;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--glass-strong);
        }
        .project-media::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 25% 25%, var(--blob-1) 0%, transparent 50%),
            radial-gradient(circle at 75% 70%, var(--blob-2) 0%, transparent 50%);
          opacity: 0.4;
          filter: blur(20px);
          z-index: 0;
        }
        .project-media :global(img) {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .project-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .project-role {
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--text-faint);
          text-transform: uppercase;
        }
        .project-title {
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.015em;
          line-height: 1.25;
          color: var(--text);
          margin: 0;
        }
        .project-title :global(a) {
          color: var(--text);
          text-decoration: none;
        }
        .project-title :global(a:hover) {
          color: var(--accent);
        }
        .project-desc {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .project-links {
          display: flex;
          gap: 16px;
          margin-top: 4px;
        }
      `}</style>
    </article>
  )
}

export default Card
