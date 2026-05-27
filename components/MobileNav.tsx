import { useEffect, useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navShow ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [navShow])

  const onToggleNav = () => setNavShow((s) => !s)

  return (
    <div className="mobile-nav-root sm:hidden">
      <button
        type="button"
        className="mobile-nav-btn"
        aria-label="Toggle menu"
        aria-expanded={navShow}
        onClick={onToggleNav}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {navShow ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>
      <div className={`mobile-nav-panel ${navShow ? 'open' : ''}`} aria-hidden={!navShow}>
        <nav className="mobile-nav-links" aria-label="Mobile">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} onClick={onToggleNav}>
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      <style jsx>{`
        .mobile-nav-btn {
          width: 36px;
          height: 36px;
          margin-left: 6px;
          border-radius: 50%;
          border: 1px solid var(--border-strong);
          background: var(--glass-strong);
          backdrop-filter: blur(12px);
          color: var(--text);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .mobile-nav-btn:hover {
          border-color: var(--border-strong);
        }
        .mobile-nav-btn svg {
          width: 16px;
          height: 16px;
        }
        .mobile-nav-panel {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: var(--glass-strong);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-nav-panel.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        .mobile-nav-links :global(a) {
          font-family: 'Geist', sans-serif;
          font-size: 28px;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--text);
          padding: 10px 24px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .mobile-nav-links :global(a:hover) {
          background: var(--glass);
        }
      `}</style>
    </div>
  )
}

export default MobileNav
