import { Link } from 'react-router-dom'
import { formatNewsDate, newsArticles } from '../../data/news'
import { homePage } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function HomeNews() {
  const { news } = homePage
  const latest = [...newsArticles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, news.limit)

  if (latest.length === 0) return null

  return (
    <section className="rg-section" id="tin-tuc" aria-labelledby="rg-home-news-title">
      <div className="container">
        <Reveal className="rg-home-head-row">
          <div>
            <p className="rg-kicker">{news.kicker}</p>
            <h2 className="rg-section-title" id="rg-home-news-title">
              {news.title}
            </h2>
          </div>
          <Link to={news.link.to} className="rg-btn rg-btn-outline">
            {news.link.label}
          </Link>
        </Reveal>
        <div className="rg-news-grid">
          {latest.map((article, i) => (
            <Reveal as="article" delay={i * 80} key={article.slug} className="rg-news-card">
              {article.cover ? (
                <div className="rg-news-card-media">
                  <img
                    src={article.cover.src}
                    alt={article.cover.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div className="rg-news-card-media rg-news-card-media-empty" aria-hidden="true">
                  <span>Không có ảnh trong bài gốc</span>
                </div>
              )}
              <div className="rg-news-card-body">
                <div className="rg-news-meta">
                  <span>{article.source.name}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.date}>{formatNewsDate(article.date)}</time>
                </div>
                <h3 className="rg-home-news-title">
                  <Link to={`/tin-tuc/${article.slug}`}>{article.title}</Link>
                </h3>
                <p>{article.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
