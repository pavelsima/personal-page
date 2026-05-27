import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 6 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]
  const px = size * 4 // tailwind-ish size unit

  return (
    <a
      className="social-icon"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={kind}
    >
      <SocialSvg style={{ width: `${px}px`, height: `${px}px` }} className="fill-current" />
      <style jsx>{`
        .social-icon {
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
        .social-icon:hover {
          color: var(--text);
          background: var(--glass);
          border-color: var(--border);
          transform: translateY(-3px);
        }
      `}</style>
    </a>
  )
}

export default SocialIcon
