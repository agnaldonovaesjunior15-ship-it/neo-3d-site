import './Problem.css'

const painPoints = [
  { num: '01', title: 'Manutenção reativa',         desc: 'técnicos generalistas, peças genéricas, retrabalho recorrente.' },
  { num: '02', title: 'Falta de gestão de frota',   desc: 'sem rastreio de horas, calibração ou histórico por equipamento.' },
  { num: '03', title: 'Custos imprevisíveis',       desc: 'cada parada vira orçamento novo, sem SLA, sem previsibilidade orçamentária.' },
  { num: '04', title: 'Capacitação insuficiente',   desc: 'operadores aprendem por tentativa, comprometendo qualidade e segurança.' },
]

const statLines = [
  { label: 'Tempo médio de diagnóstico', value: 'NEO 3D · ≤24h' },
  { label: 'Cobertura on-site',          value: 'SP · MG · RJ' },
  { label: 'Modelo de gestão',           value: 'MaaS / Frota' },
]

export default function Problem() {
  return (
    <section className="block">
      <div className="container">
        <div className="problem-grid">

          {/* Card de stat (lateral esquerda) */}
          <div className="problem-stat-block">
            <div className="psb-label">/ Impacto operacional</div>
            <div className="psb-num">73<em>%</em></div>
            <div className="psb-cap">
              das paradas em fábricas digitais decorrem de manutenção reativa —
              falhas detectadas tarde demais, sem peças, sem rotina preventiva.
            </div>
            <div className="psb-divider" />
            {statLines.map(line => (
              <div key={line.label} className="psb-line">
                <strong>{line.label}</strong>
                <span>{line.value}</span>
              </div>
            ))}
          </div>

          {/* Texto de diagnóstico + lista de dores */}
          <div className="problem-text">
            <div className="sec-num">/ 02 — Diagnóstico</div>
            <h3>Sua produção 3D não pode esperar.</h3>
            <p>
              A interrupção de uma impressora industrial impacta{' '}
              <strong>prazos, lotes e margem</strong> ao mesmo tempo. Falhas inesperadas,
              diagnósticos demorados e a falta de peças especializadas são desafios que
              travam a operação — e que a NEO 3D resolve com método e previsibilidade.
            </p>

            <div className="pain-list">
              {painPoints.map(p => (
                <div key={p.num} className="pain-item">
                  <span className="pain-num">{p.num}</span>
                  <div className="pain-txt">
                    <b>{p.title}</b> · {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
