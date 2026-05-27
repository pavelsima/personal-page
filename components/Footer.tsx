import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer-inner">
        <span>
          {siteMetadata.title} · © {new Date().getFullYear()}
        </span>
        <span>
          Designed &amp; built in Prague ·{' '}
          <span style={{ color: 'var(--accent)' }} aria-hidden="true">
            ●
          </span>{' '}
          Available for chat
        </span>
      </div>
      <style jsx>{`
        .site-footer {
          padding: 32px 0 48px;
          border-top: 1px solid var(--border);
          margin-top: 64px;
        }
        .site-footer-inner {
          font-family: 'Geist Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--text-faint);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 640px) {
          .site-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  )
}
