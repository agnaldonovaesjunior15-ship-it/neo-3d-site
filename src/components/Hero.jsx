import { Link } from 'react-router-dom'
import './Hero.css'

const heroMeta = [
  { label: 'Tecnologias', value: 'FDM', accent: '·', extra: 'SLA · FGF' },
  { label: 'Cobertura',   value: 'SP',  accent: '·', extra: 'MG · RJ' },
  { label: 'Modelo',      value: 'MaaS', accent: '+', extra: 'Frota' },
  { label: 'Foco',        value: 'Uptime', accent: '+', extra: 'Performance' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-inner">
        <div className="hero-tag fade-in">
          / 01 — Performance industrial em manufatura aditiva
        </div>

        <h1 className="fade-in delay-1">
          Performance máxima<br />
          para <em>fabricação digital.</em>
        </h1>

        <p className="hero-sub fade-in delay-2">
          Otimize a operação de suas impressoras 3D com inteligência, previsibilidade
          e suporte multimarcas em FDM, SLA e FGF. Sua produção não pode parar — e nós
          garantimos isso.
        </p>

        <div className="hero-cta fade-in delay-3">
          <Link to="/contratos" className="btn-primary">Conheça os Planos</Link>
          <Link to="/contato"   className="btn-ghost">Solicite um Diagnóstico</Link>
        </div>

        <div className="hero-meta fade-in delay-4">
          {heroMeta.map(item => (
            <div key={item.label} className="hero-meta-item">
              <label>{item.label}</label>
              <span>
                {item.value} <em>{item.accent}</em> {item.extra}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
