import { Link, useParams } from 'react-router-dom'
import { getArticleBySlug } from '../data/news'

export function NewsDetailPage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <section className="rg-section">
        <div className="container">
          <h1 className="rg-section-title">Không tìm thấy bài viết</h1>
          <p className="rg-section-lead">Slug không khớp tin mẫu hiện có.</p>
          <Link to="/tin-tuc" className="rg-btn rg-btn-outline">
            Quay lại danh sách tin
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          {article.sample ? <span className="rg-badge-sample">Tin mẫu</span> : null}
          <h1>{article.title}</h1>
          <p>{article.date}</p>
        </div>
      </div>
      <section className="rg-section">
        <div className="container" style={{ maxWidth: '46rem' }}>
          {article.body.map((para) => (
            <p key={para.slice(0, 24)} style={{ color: 'var(--rg-muted)', fontSize: '1.05rem' }}>
              {para}
            </p>
          ))}
          <Link to="/tin-tuc" className="rg-btn rg-btn-outline mt-3">
            ← Tất cả tin tức
          </Link>
        </div>
      </section>
    </>
  )
}
