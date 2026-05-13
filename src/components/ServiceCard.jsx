import { Link } from 'react-router-dom'

export default function ServiceCard({ tag, title, titleBreak, description, features, link, linkLabel, featured = false }) {
  return (
    <article className={`serv-card ${featured ? 'feat' : ''}`}>
      <div className="serv-tag">{tag}</div>
      <h3>{title}<br />{titleBreak}</h3>
      <p>{description}</p>
      <ul className="serv-features">
        {features.map(f => <li key={f}>{f}</li>)}
      </ul>
      <Link to={link} className="serv-link">
        {linkLabel} <em>→</em>
      </Link>
    </article>
  )
}
