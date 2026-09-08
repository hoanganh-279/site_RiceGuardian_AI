import { Link, useParams } from 'react-router-dom'
import { Reveal } from '../components/landing/Reveal'
import { formatNewsDate, getArticleBySlug } from '../data/news'

function BackToList({ className = '' }) {
  return (
    <Link to="/tin-tuc" className={`rg-btn rg-btn-outline rg-news-back ${className}`.trim()}>
      Quay lại tất cả tin tức
    </Link>
  )
}

function NewsSection({ section, index }) {
  if (section.type === 'text') {
    return (
      <Reveal delay={index * 40}>
        <div className="rg-news-block">
          {section.heading ? <h2>{section.heading}</h2> : null}
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    )
  }

  if (section.type === 'quote') {
    return (
      <Reveal delay={index * 40}>
        <blockquote className="rg-news-quote">
          <p>{section.text}</p>
          <footer>{section.attribution}</footer>
        </blockquote>
      </Reveal>
    )
  }

  if (section.type === 'prices') {
    return (
      <Reveal delay={index * 40}>
        <div className="rg-news-block">
          <h2>{section.title}</h2>
          <div className="rg-news-table-wrap">
            <table className="rg-news-table">
              <caption className="visually-hidden">{section.title}</caption>
              <thead>
                <tr>
                  <th scope="col">Hạng mục</th>
                  <th scope="col">Mức ghi nhận</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={`${row.label}-${row.value}`}>
                    <th scope="row">{row.label}</th>
                    <td>
                      {row.value}
                      {row.note ? <span className="rg-news-table-note">{row.note}</span> : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.note ? <p className="rg-news-table-foot">{section.note}</p> : null}
        </div>
      </Reveal>
    )
  }

  if (section.type === 'figure') {
    return (
      <Reveal delay={index * 40}>
        <figure className="rg-news-figure">
          <img src={section.src} alt={section.alt} loading="lazy" />
          <figcaption>
            {section.caption}
            {section.credit ? <span>{section.credit}</span> : null}
          </figcaption>
        </figure>
      </Reveal>
    )
  }

  return null
}

export function NewsDetailPage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <section className="rg-section">
        <div className="container">
          <h1 className="rg-section-title">Không tìm thấy bài viết</h1>
          <p className="rg-section-lead">Đường dẫn không khớp tin đang có trên trang.</p>
          <BackToList />
        </div>
      </section>
    )
  }

  const authorLine = [article.source.name, article.source.author].filter(Boolean).join(' · ')

  return (
    <article className="rg-news-detail">
      <div className="rg-news-backbar">
        <div className="container">
          <BackToList />
        </div>
      </div>

      <header
        className={article.cover ? 'rg-news-hero rg-news-hero-photo' : 'rg-news-hero'}
      >
        {article.cover ? (
          <img className="rg-news-hero-media" src={article.cover.src} alt="" />
        ) : null}
        <div className="rg-news-hero-shade" />
        <div className="container rg-news-hero-copy">
          <p className="rg-kicker">Tóm tắt có trích nguồn</p>
          <h1>{article.title}</h1>
          <p className="rg-news-hero-meta">
            <span>{authorLine}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.date}>{formatNewsDate(article.date)}</time>
          </p>
          <p className="rg-news-hero-lead">{article.excerpt}</p>
        </div>
      </header>

      <div className="rg-news-body">
        <div className="container">
          {article.sections.map((section, index) => (
            <NewsSection
              key={`${section.type}-${section.heading || section.title || section.caption || index}`}
              section={section}
              index={index}
            />
          ))}

          <Reveal>
            <aside className="rg-news-source">
              <h2>Nguồn</h2>
              <p>
                Nội dung trên là tóm tắt, không sao chép nguyên văn. Số liệu, tên người và địa danh
                lấy từ bài gốc của {article.source.name}
                {article.source.author ? ` (${article.source.author})` : ''}, ngày{' '}
                {formatNewsDate(article.date)}.
              </p>
              <a
                className="rg-btn rg-btn-primary"
                href={article.source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Đọc bài gốc
              </a>
            </aside>
          </Reveal>

          <div className="rg-news-back-end">
            <BackToList />
          </div>
        </div>
      </div>
    </article>
  )
}
