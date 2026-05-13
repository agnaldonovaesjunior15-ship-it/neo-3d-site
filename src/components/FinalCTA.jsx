import { Link } from 'react-router-dom'
import './FinalCTA.css'

const channels = [
  { label: 'WhatsApp',  value: '(11) 93927-7467' },
  { label: 'E-mail',    value: 'contato@neo3d.com.br' },
  { label: 'Cobertura', value: 'SP · MG · RJ' },
  { label: 'Resposta',  value: '≤ 24h úteis' },
]

export default function FinalCTA() {
  return (
    <section className="cta-final">
      <div className="cta-inner">
        <div>
          <div className="sec-num">/ 07 — Próximo passo</div>
          <h2>Pronto para otimizar<br />sua <em>produção 3D?</em></h2>
          <p className="cta-final-sub">
            Fale com nossa equipe de especialistas e descubra como a NEO 3D pode
            transformar sua operação aditiva em uma infraestrutura previsível,
            eficiente e escalável.
          </p>
          <div className="cta-actions">
            <Link to="/contato" className="btn-primary">Solicitar Diagnóstico</Link>
            <a href="https://wa.me/5511939277467" className="btn-ghost">WhatsApp Direto</a>
          </div>
        </div>

        <div className="cta-info">
          <div className="cta-info-label">/ Canais diretos</div>
          {channels.map(c => (
            <div key={c.label} className="cta-info-line">
              <strong>{c.label}</strong>
              <span>{c.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
