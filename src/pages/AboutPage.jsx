import { teamMembers, mentors } from '../data/team'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRevealOnScroll()
  return (
    <Tag
      ref={ref}
      className={`rg-reveal ${className}`.trim()}
      style={delay ? { '--rg-reveal-delay': `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export function AboutPage() {
  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Giới thiệu</p>
          <h1>Đội ngũ dự án</h1>
          <p>
            Nhóm thực hiện RiceGuardian AI và mentor hướng dẫn tại Đại học Thủ Dầu Một.
          </p>
        </div>
      </div>

      <section className="rg-section rg-team-section">
        <div className="container">
          <Reveal className="rg-mission-band rg-reveal-from-left mb-5">
            <p>
              Nhóm thực hiện RiceGuardian AI và mentor hướng dẫn tại Đại học Thủ Dầu Một.
            </p>
          </Reveal>

          <div className="rg-portrait-list">
            {teamMembers.map((m, i) => {
              const reversed = i % 2 === 1
              const from = reversed ? 'right' : 'left'
              return (
                <Reveal
                  key={m.id}
                  as="article"
                  className={`rg-portrait-row rg-reveal-from-${from}${reversed ? ' is-reversed' : ''}`}
                  delay={i * 40}
                >
                  <div className="rg-portrait-media">
                    <img
                      src={m.photo}
                      alt={m.name}
                      width={368}
                      height={460}
                      loading="lazy"
                    />
                  </div>
                  <div className="rg-portrait-copy">
                    <p className="rg-portrait-role">{m.role}</p>
                    <h2 className="rg-portrait-name">{m.name}</h2>
                    <p className="rg-portrait-meta">
                      {m.major}
                      <span className="rg-portrait-meta-sep" aria-hidden="true">
                        ·
                      </span>
                      {m.school}
                    </p>
                    <p className="rg-portrait-bio">{m.bio}</p>
                    <blockquote className="rg-portrait-quote">
                      <p>“{m.quote}”</p>
                    </blockquote>
                    <ul className="rg-portrait-tags">
                      {m.tags.map((tag) => (
                        <li key={tag}>
                          <span className="rg-tag">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal as="h2" className="rg-section-title rg-mentor-heading rg-reveal-from-left">
            Mentor
          </Reveal>
          <div className="rg-mentor-grid">
            {mentors.map((m, i) => (
              <Reveal
                key={m.id}
                as="article"
                className="rg-mentor-card rg-reveal-from-left"
                delay={i * 80}
              >
                <div className="rg-mentor-photo">
                  <img
                    src={m.photo}
                    alt={m.name}
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
                <div className="rg-mentor-body">
                  <h3>{m.name}</h3>
                  <p className="rg-mentor-role">{m.major}</p>
                  <p className="rg-mentor-bio">{m.bio}</p>
                  <blockquote className="rg-portrait-quote rg-portrait-quote--compact">
                    <p>“{m.quote}”</p>
                  </blockquote>
                  <ul className="rg-portrait-tags">
                    {m.tags.map((tag) => (
                      <li key={tag}>
                        <span className="rg-tag">{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
