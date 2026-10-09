import { homePage, homeTechTiles } from '../../data/siteCopy'
import { HomeIcon } from './HomeIcon'
import { Reveal } from './Reveal'

export function HomeTechGrid() {
  const { tech } = homePage

  return (
    <section className="rg-section" id="cong-nghe" aria-labelledby="rg-home-tech-title">
      <div className="container">
        <Reveal className="rg-home-head-center">
          <p className="rg-kicker">{tech.kicker}</p>
          <h2 className="rg-section-title" id="rg-home-tech-title">
            {tech.title}
          </h2>
          <p className="rg-section-lead">{tech.lead}</p>
        </Reveal>
        <ul className="rg-home-tech">
          {homeTechTiles.map((tile, i) => (
            <Reveal as="li" delay={(i % 3) * 70} key={tile.id}>
              <span className="rg-home-tech-icon">
                <HomeIcon name={tile.icon} />
              </span>
              <h3>{tile.title}</h3>
              <p>{tile.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
