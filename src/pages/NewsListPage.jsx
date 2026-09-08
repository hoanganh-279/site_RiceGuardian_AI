import { Link } from 'react-router-dom'
import { newsArticles } from '../data/news'

export function NewsListPage() {
  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Tin tức</p>
          <h1>Tin tức & cập nhật</h1>
          <p>Các bài dưới đây là tin mẫu lấy ý từ thuyết minh dự án — chưa kết nối CMS.</p>
        </div>
      </div>
      <section className="rg-section">
        <div className="container">
          <div className="rg-news-grid">
            {newsArticles.map((a) => (
              <Link key={a.slug} to={`/tin-tuc/${a.slug}`} className="rg-panel rg-news-card">
                {a.sample ? <span className="rg-badge-sample">Tin mẫu</span> : null}
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <div className="rg-news-meta">{a.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
