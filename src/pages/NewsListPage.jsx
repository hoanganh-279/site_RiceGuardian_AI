import { Link } from 'react-router-dom'
import { formatNewsDate, newsArticles } from '../data/news'

export function NewsListPage() {
  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Tin tức</p>
          <h1>Tin thị trường lúa gạo</h1>
          <p>
            Tóm tắt có trích nguồn từ báo và chuyên trang lúa gạo — không phải tin do RiceGuardian
            biên tập gốc. Số liệu và ảnh lấy từ đúng bài được dẫn.
          </p>
        </div>
      </div>
      <section className="rg-section rg-news-list">
        <div className="container">
          <div className="rg-news-grid">
            {newsArticles.map((article) => (
              <article key={article.slug} className="rg-news-card">
                {article.cover ? (
                  <div className="rg-news-card-media">
                    <img src={article.cover.src} alt={article.cover.alt} />
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
                  <h2>
                    <Link to={`/tin-tuc/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p>{article.excerpt}</p>
                  <Link to={`/tin-tuc/${article.slug}`} className="rg-btn rg-btn-primary rg-news-card-cta">
                    Xem chi tiết
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
