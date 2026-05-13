import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Footer.css'

const cols = [
  {
    title: '/ Serviços',
    links: [
      { to: '/manutencao',  label: 'Manutenção e Suporte' },
      { to: '/contratos',   label: 'Contratos' },
      { to: '/treinamento', label: 'Treinamento' },
      { to: '/materiais',   label: 'Materiais' },
      { to: '/fabricacao',  label: 'Fabricação Digital' },
    ],
  },
  {
    title: '/ Empresa',
    links: [
      { to: '/contato',         label: 'Contato' },
      { to: '/contrato-modelo', label: 'Modelo de Contrato' },
    ],
  },
]

const coverage = ['São Paulo · Capital', 'Mogi das Cruzes', 'Sorocaba', 'Grande SP · MG · RJ']

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-inner">
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo />
            <div className="foot-tag">Multisserviços em<br />Manufatura Aditiva</div>
            <p className="foot-desc">
              Manutenção, contratos, treinamento, materiais e fabricação digital
              para impressoras 3D industriais e profissionais.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.title} className="foot-col">
              <h5>{col.title}</h5>
              <ul>
                {col.links.map(l => (
                  <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="foot-col">
            <h5>/ Cobertura</h5>
            <ul>
              {coverage.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 NEO 3D. Todos os direitos reservados.</span>
          <div className="foot-social">
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
