import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = navShow ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [navShow])

  const onToggleNav = () => setNavShow((s) => !s)

  const panel = (
    <div className={`mobile-nav-panel ${navShow ? 'open' : ''}`} aria-hidden={!navShow}>
      <button
        type="button"
        className="mobile-nav-close"
        onClick={onToggleNav}
        aria-label="Close menu"
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
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
      <nav className="mobile-nav-links" aria-label="Mobile">
        {headerNavLinks.map((link) => (
          <Link key={link.title} href={link.href} onClick={onToggleNav}>
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  )

  return (
    <div className="sm:hidden">
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
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      {mounted && createPortal(panel, document.body)}
    </div>
  )
}

export default MobileNav
