import { Link } from 'react-router-dom'
import './PageHero.css'

/**
 * Hero compacto usado em todas as páginas internas.
 * Variante reduzida do Hero da home — mesmo DNA visual.
 *
 * @param {string}  eyebrow      - "/ 02 — Manutenção" (label superior)
 * @param {string}  title        - título principal (pode usar <em> para destacar)
 * @param {string}  subtitle     - subtítulo descritivo
 * @param {object}  primaryCTA   - { to, label } botão principal (router Link)
 * @param {object}  secondaryCTA - { to, label } botão secundário (opcional)
 */
export default function PageHero({ eyebrow, title, subtitle, primaryCTA, secondaryCTA }) {
  return (
    <section className="page-hero">
      <div className="ph-grid" />
      <div className="ph-inner">
        <div className="ph-eyebrow fade-in">{eyebrow}</div>
        <h1 className="fade-in delay-1" dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && (
          <p className="ph-sub fade-in delay-2">{subtitle}</p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="ph-cta fade-in delay-3">
            {primaryCTA && (
              <Link to={primaryCTA.to} className="btn-primary">{primaryCTA.label}</Link>
            )}
            {secondaryCTA && (
              <Link to={secondaryCTA.to} className="btn-ghost">{secondaryCTA.label}</Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
