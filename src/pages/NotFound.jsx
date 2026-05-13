import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{
      minHeight: '90vh',
      background: 'var(--g950)',
      color: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '160px 40px 100px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '600px' }}>
        <div style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '11px',
          letterSpacing: '3px',
          color: 'var(--teal-core)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          / Erro 404 · Página não encontrada
        </div>

        <h1 style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: 'clamp(64px, 12vw, 140px)',
          fontWeight: 800,
          lineHeight: .9,
          letterSpacing: '-3px',
          marginBottom: '1rem',
        }}>
          4<em style={{ fontStyle: 'normal', color: 'var(--teal-core)' }}>0</em>4
        </h1>

        <p style={{
          fontSize: '17px',
          color: 'rgba(255,255,255,.55)',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          A página que você procurou não existe ou foi movida. Volte ao início
          para encontrar o que precisa.
        </p>

        <Link to="/" className="btn-primary">Voltar ao Início</Link>
      </div>
    </section>
  )
}
