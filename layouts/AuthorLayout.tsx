import { ReactNode } from 'react'
import Link from 'next/link'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import type { Authors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

interface Props {
  children?: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

const experience = [
  {
    period: 'Nov 2022 — Present',
    role: 'Senior Software Engineer',
    company: 'Nice Ltd.',
    description:
      'Working on a chatbot-building platform with Vue.js, Laravel, and the Rasa framework — a full-stack solution for creating and managing conversational agents. Also contributing to PoC projects in NestJS, TypeScript, GraphQL, and Nuxt.js, where I built a low/no-code drag-and-drop builder for creating and executing custom MCP tools.',
  },
  {
    period: 'Mar 2020 — Oct 2022',
    role: 'Frontend Developer',
    company: 'Easy Software s.r.o.',
    description:
      'Worked on cloud and on-premise project management apps based on Redmine using Vue.js, SASS, and GraphQL. Ensured quality and performance through testing with Cypress and Jest.',
  },
  {
    period: 'Apr 2018 — Mar 2020',
    role: 'Calculoid Chief Developer',
    company: 'Easy Software s.r.o.',
    description:
      'Led the development of the Calculoid application in close collaboration with the product manager, using AngularJS, Vue.js, and PHP. Oversaw Git administration, helped with DevOps on AWS, and GitLab CI/CD.',
  },
  {
    period: 'Sep 2016 — Apr 2018',
    role: 'Frontend Developer',
    company: 'Easy Software s.r.o.',
    description:
      'Worked primarily on e-commerce sites built with Joomla, using AngularJS, Less CSS, PHP, and jQuery. Focused on frontend presentation, animations, and SEO performance, while also contributing to backend development as needed.',
  },
]

const education = [
  {
    period: '2016 — 2017',
    school: 'Czech Technical University in Prague',
    program: 'Faculty of Electrical Engineering · Otevřená informatika',
    note: 'Unfinished — only one year.',
  },
  {
    period: '2012 — 2016',
    school: 'SPŠ elektrotechnická Františka Křižíka',
    program: 'Informační technologie',
    note: '',
  },
]

const stackGroups: { label: string; items: string[] }[] = [
  {
    label: 'frontend',
    items: ['Vue.js', 'React', 'TypeScript', 'Capacitor / Cordova', 'Storybook', 'Vue Query', 'TanStack Query'],
  },
  { label: 'styles', items: ['Tailwind', 'SCSS', 'Less', 'PostCSS'] },
  { label: 'apis', items: ['GraphQL', 'REST'] },
  { label: 'bundlers', items: ['Vite', 'Webpack', 'Bun'] },
  {
    label: 'backend',
    items: ['Node.js', 'Laravel', 'Python (Django)', 'Firebase', 'RedwoodJS'],
  },
  { label: 'databases', items: ['PostgreSQL', 'MySQL', 'Firestore'] },
  { label: 'tests', items: ['Vitest', 'Jest', 'Cypress', 'Playwright'] },
  {
    label: 'devops',
    items: ['GitHub Actions', 'GitLab CI/CD', 'Google Cloud', 'Shell scripting'],
  },
  { label: 'ai & tooling', items: ['Claude', 'Cursor', 'MCP', 'GitHub Copilot'] },
]

export default function AuthorLayout({ content }: Props) {
  const { name, avatar, email, twitter, linkedin, github } = content

  return (
    <>
      <PageSEO title={`About — ${name}`} description={`About me — ${name}`} />

      <div className="site-container">
        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-text hero-load">
            <span className="eyebrow">01 · about</span>
            <h1 className="about-headline">
              Hello <span className="italic-accent">again</span>.
            </h1>
            <p className="about-lede">
              I'm a frontend-focused developer with 9+ years of experience — Vue.js is my main
              stack and where I have the most seniority. I can go full-stack when a project needs
              it: Node.js, Laravel, and the occasional Python or RedwoodJS. React when the project
              asks for it.
            </p>
            <p className="about-lede">
              Lately I've been focusing on AI-driven automation — using tools like Cursor and Claude
              Code, with hands-on experience in agentic GitHub Copilot and MCP integrations to
              improve and accelerate my development workflow.
            </p>
          </div>

          <aside className="about-avatar-card glass-card-lg hero-load-card">
            <div className="avatar-frame">
              <Image
                src={avatar}
                alt={name}
                width="320px"
                height="320px"
                className="avatar-img"
              />
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
            </div>
          </aside>
        </section>

        {/* Timeline */}
        <section className="block reveal" id="career">
          <div>
            <div className="section-label">02 · career</div>
            <h2 className="section-title">
              Career so <em>far</em>
            </h2>
          </div>
          <ol className="timeline stagger">
            {experience.map((e) => (
              <li key={`${e.company}-${e.period}`} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="glass-card lifts timeline-card">
                  <div className="timeline-period">{e.period}</div>
                  <h3 className="timeline-role">
                    {e.role} <span className="timeline-company">· {e.company}</span>
                  </h3>
                  <p className="timeline-desc">{e.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Stack */}
        <section className="block reveal" id="stack">
          <div>
            <div className="section-label">03 · stack</div>
            <h2 className="section-title">
              Tools I <em>actually</em> use
            </h2>
          </div>
          <div className="stack-grid stagger">
            {stackGroups.map((g) => (
              <div key={g.label} className="stack-group">
                <span className="chip cat">{g.label}</span>
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="block reveal" id="education">
          <div>
            <div className="section-label">04 · education</div>
            <h2 className="section-title">
              Where I <em>studied</em>
            </h2>
          </div>
          <div className="edu-grid stagger">
            {education.map((edu) => (
              <div key={edu.school} className="glass-card lifts edu-card">
                <div className="edu-period">{edu.period}</div>
                <h3 className="edu-school">{edu.school}</h3>
                <p className="edu-program">{edu.program}</p>
                {edu.note && <p className="edu-note">{edu.note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="contact-block reveal" id="contact">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            05 · contact
          </div>
          <h2 className="contact-title">
            Say <em>hello</em> →
          </h2>
          <a href={`mailto:${email}`} className="email-link">
            {email}
            <span className="arrow">↗</span>
          </a>
        </section>
      </div>

      <style jsx>{`
        .about-hero {
          padding: 80px 0 100px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-headline {
          font-family: 'Geist', sans-serif;
          font-weight: 500;
          font-size: clamp(48px, 7vw, 84px);
          line-height: 1.02;
          letter-spacing: -0.035em;
          margin: 22px 0 24px;
          color: var(--text);
        }
        .about-lede {
          font-size: 18px;
          line-height: 1.65;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 0 18px;
        }
        .about-avatar-card {
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

        /* Timeline */
        .timeline {
          list-style: none;
          padding: 0;
          margin: 36px 0 0;
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: var(--border-strong);
        }
        .timeline-item {
          position: relative;
          padding-left: 40px;
          margin-bottom: 20px;
        }
        .timeline-dot {
          position: absolute;
          left: 3px;
          top: 30px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent);
        }
        .timeline-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .timeline-period {
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--text-faint);
          text-transform: uppercase;
        }
        .timeline-role {
          font-size: 19px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: -0.015em;
          color: var(--text);
          margin: 0;
        }
        .timeline-company {
          color: var(--text-muted);
          font-weight: 400;
        }
        .timeline-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        /* Stack */
        .stack-grid {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 36px;
        }
        .stack-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }

        /* Education */
        .edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 36px;
        }
        .edu-period {
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--text-faint);
          text-transform: uppercase;
        }
        .edu-school {
          font-size: 19px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: -0.015em;
          color: var(--text);
          margin: 8px 0 4px;
        }
        .edu-program {
          font-size: 14px;
          color: var(--text-muted);
          margin: 0 0 4px;
        }
        .edu-note {
          font-size: 13px;
          color: var(--text-faint);
          margin: 0;
          font-style: italic;
        }

        /* Contact */
        .contact-block {
          padding: 120px 0 100px;
          text-align: center;
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

        @media (max-width: 900px) {
          .about-hero {
            grid-template-columns: 1fr;
            gap: 56px;
            padding: 60px 0 80px;
          }
          .about-avatar-card {
            max-width: 380px;
            margin: 0 auto;
            width: 100%;
          }
          .block {
            padding: 64px 0;
          }
          .edu-grid {
            grid-template-columns: 1fr;
          }
          .contact-block {
            padding: 80px 0 64px;
          }
        }
        @media (max-width: 640px) {
          .about-hero {
            padding: 40px 0 56px;
          }
          .about-lede {
            font-size: 17px;
          }
          .block {
            padding: 56px 0;
          }
        }
      `}</style>
    </>
  )
}
