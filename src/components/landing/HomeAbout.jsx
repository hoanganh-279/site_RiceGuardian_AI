import { Link } from 'react-router-dom'
import { homePage } from '../../data/siteCopy'
import { mentors, teamMembers } from '../../data/team'
import { HomeIcon } from './HomeIcon'
import { Reveal } from './Reveal'

const pillarIcons = ['leaf', 'shield', 'water']

export function HomeAbout() {
  const { about, values } = homePage
  const people = [...teamMembers, ...mentors]

  return (
    <>
      <section className="rg-section" id="gioi-thieu" aria-labelledby="rg-home-about-title">
        <div className="container">
          <div className="rg-home-about">
            <Reveal className="rg-home-about-copy">
              <p className="rg-kicker">{about.kicker}</p>
              <h2 className="rg-section-title" id="rg-home-about-title">
                {about.title}
              </h2>
              <p className="rg-home-about-mission">{homePage.mission}</p>
              <p className="rg-home-about-vision">
                <strong>Tầm nhìn. </strong>
                {homePage.vision}
              </p>
              <Link to={about.link.to} className="rg-text-link">
                {about.link.label}
              </Link>
            </Reveal>
            <Reveal className="rg-home-people" delay={100}>
              <h3 className="rg-home-people-label">{about.teamLabel}</h3>
              <ul>
                {people.map((p) => (
                  <li key={p.id}>
                    <img
                      src={p.photo}
                      alt={`Chân dung ${p.name}`}
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="rg-home-people-name">{p.name}</p>
                      <p className="rg-home-people-role">
                        {p.role === 'Thành viên' || p.role === 'Trưởng nhóm'
                          ? `${p.role} · ${p.major}`
                          : p.major}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rg-section rg-section-alt" aria-labelledby="rg-home-values-title">
        <div className="container">
          <Reveal>
            <p className="rg-kicker">{values.kicker}</p>
            <h2 className="rg-section-title" id="rg-home-values-title">
              {values.title}
            </h2>
          </Reveal>
          <ul className="rg-home-values">
            {homePage.pillars.map((p, i) => (
              <Reveal as="li" delay={i * 80} key={p.title}>
                <HomeIcon name={pillarIcons[i] ?? 'leaf'} />
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
