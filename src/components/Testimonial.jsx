import './Testimonial.css'

const stats = [
  { label: '/ Uptime médio',  value: '98',   suffix: ',4%', cap: 'disponibilidade contratada em planos Performance e Premium.' },
  { label: '/ Diagnóstico',   value: '≤24',  suffix: 'h',   cap: 'tempo médio entre abertura do chamado e laudo técnico.' },
  { label: '/ Marcas',        value: '12',   suffix: '+',   cap: 'fabricantes atendidos com técnicos certificados.' },
  { label: '/ Frota gerida',  value: '+200', suffix: '',    cap: 'impressoras sob contrato em SP, MG e RJ.' },
]

export default function Testimonial() {
  return (
    <section className="block">
      <div className="container">
        <div className="sec-num">/ 05 — Quem confia</div>
        <h2 className="sec-title">Resultado mensurável,<br />não promessa.</h2>
        <div className="sec-rule" />

        <div className="testi-wrap">

          <div className="testi-quote-block">
            <span className="testi-mark">“</span>
            <p className="testi-quote">
              A NEO 3D transformou nossa operação aditiva em{' '}
              <em>infraestrutura previsível.</em> Saímos do modelo apaga-incêndio para
              uma rotina de frota com SLA, relatórios e zero paralisação crítica em
              seis meses.
            </p>
            <div className="testi-attrib">
              <div className="testi-avatar">RM</div>
              <div>
                <div className="testi-name">Rafael Moraes</div>
                <div className="testi-role">Eng. Manufatura · Indústria Auto</div>
              </div>
            </div>
          </div>

          <div className="testi-stats">
            {stats.map(s => (
              <div key={s.label} className="testi-stat">
                <div className="ts-label">{s.label}</div>
                <div className="ts-value">
                  {s.value}<em>{s.suffix}</em>
                </div>
                <div className="ts-cap">{s.cap}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
