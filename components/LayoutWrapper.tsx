import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  // Reveal-on-scroll for [data-reveal] and [data-stagger] descendants.
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document
        .querySelectorAll('.reveal, .stagger')
        .forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal, .stagger').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="atmosphere" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <div className="site-container nav-inner">
          <Link href="/" aria-label={`${siteMetadata.title}, home`}>
            <span className="logo">
              <span className="logo-dot" aria-hidden="true" />
              <span>pavel&nbsp;sima</span>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <span className="hidden sm:contents">
              {headerNavLinks.map((link) => (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </span>
            <ThemeSwitch />
            <MobileNav />
          </nav>
        </div>
      </header>

      <main id="main">{children}</main>

      <Footer />
    </>
  )
}

export default LayoutWrapper
