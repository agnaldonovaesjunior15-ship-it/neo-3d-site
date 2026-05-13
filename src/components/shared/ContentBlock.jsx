import './ContentBlock.css'

/**
 * Bloco genérico de conteúdo com numeração (/01, /02...).
 * Padrão visual unificado entre todas as páginas internas.
 *
 * @param {string} num       - "/ 01"
 * @param {string} eyebrow   - texto curto do label
 * @param {string} title     - título (pode usar <em>)
 * @param {string} intro     - parágrafo introdutório (opcional)
 * @param {boolean} dark     - fundo escuro
 * @param {boolean} alt      - fundo off-white
 * @param {ReactNode} children
 */
export default function ContentBlock({ num, eyebrow, title, intro, dark, alt, children }) {
  const cls = ['block', dark && 'dark', alt && 'alt'].filter(Boolean).join(' ')
  return (
    <section className={cls}>
      <div className="container">
        <div className="sec-num">{num} — {eyebrow}</div>
        <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="sec-rule" />
        {intro && <p className="sec-intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
