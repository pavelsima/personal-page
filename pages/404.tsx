import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title="Page Not Found" description="Sorry we couldn't find this page :(" />
      <div className="site-container not-found">
        <span className="eyebrow">404 · lost</span>
        <h1 className="nf-headline">
          <span className="italic-accent">Nothing</span> here.
        </h1>
        <p className="nf-lede">
          That page doesn't exist — or has moved. Plenty more on the home page.
        </p>
        <Link href="/">
          <a className="btn primary">
            ← Back home <span className="arrow"></span>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .not-found {
          padding: 120px 0 160px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          max-width: 640px;
        }
        .nf-headline {
          font-family: 'Geist', sans-serif;
          font-weight: 500;
          font-size: clamp(56px, 9vw, 120px);
          line-height: 1;
          letter-spacing: -0.035em;
          color: var(--text);
          margin: 8px 0;
        }
        .nf-lede {
          font-size: 18px;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0 0 12px;
        }
        @media (max-width: 640px) {
          .not-found {
            padding: 80px 0 96px;
          }
        }
      `}</style>
    </>
  )
}
