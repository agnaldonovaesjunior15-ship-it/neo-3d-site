import './Differentials.css'

/* Ícones SVG dedicados — strokes finos, traço técnico */
const IconMultimarca = () => (
  <svg className="diff-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor"
       strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="8" y="14" width="32" height="22" rx="2" />
    <path d="M16 14V10M32 14V10M8 22h32" />
    <circle cx="16" cy="29" r="1.5" fill="currentColor" />
    <circle cx="24" cy="29" r="1.5" fill="currentColor" />
    <circle cx="32" cy="29" r="1.5" fill="currentColor" />
  </svg>
)

const IconAgilidade = () => (
  <svg className="diff-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor"
       strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="24" cy="24" r="16" />
    <path d="M24 14v10l7 4" />
  </svg>
)

const IconUptime = () => (
  <svg className="diff-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor"
       strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 36V12l9 6 9-6 9 6 9-6v24" />
    <path d="M6 36h36" />
  </svg>
)

const IconInovacao = () => (
  <svg className="diff-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor"
       strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 6v8M24 34v8M6 24h8M34 24h8M11 11l6 6M31 31l6 6M37 11l-6 6M11 37l6-6" />
    <circle cx="24" cy="24" r="6" />
  </svg>
)

const items = [
  { num: '/ 01', Icon: IconMultimarca, title: 'Especialização', titleBreak: 'multimarca',
    desc: 'Atendimento certificado para Creality, Bambu Lab, Elegoo, Anycubic, Voron e demais referências FDM e SLA do mercado.' },
  { num: '/ 02', Icon: IconAgilidade,  title: 'Agilidade e',    titleBreak: 'transparência',
    desc: 'Diagnóstico em até 24h, prazo de reparo claro e comunicação rastreável em todas as etapas — do chamado à entrega.' },
  { num: '/ 03', Icon: IconUptime,     title: 'Foco',           titleBreak: 'em uptime',
    desc: 'Nossa prioridade é manter sua produção ativa. Manutenção preventiva, peças sob estoque e SLA de retorno minimizam paradas não planejadas.' },
  { num: '/ 04', Icon: IconInovacao,   title: 'Tecnologia',     titleBreak: 'e inovação',
    desc: 'Práticas e ferramentas atualizadas para otimização de parâmetros, calibração de precisão e gestão de ativos por equipamento.' },
]

export default function Differentials() {
  return (
    <section className="block dark">
      <div className="container">
        <div className="sec-num">/ 03 — Por que NEO 3D</div>
        <h2 className="sec-title">
          A nova geração em<br />
          manutenção <em style={{ fontStyle: 'normal', color: 'var(--teal-core)' }}>inteligente.</em>
        </h2>
        <div className="sec-rule" />
        <p className="sec-intro">
          Somos mais que assistência técnica. Somos parceiros estratégicos para garantir
          disponibilidade e performance de impressoras 3D industriais e profissionais —
          com expertise multimarca em FDM e SLA, e foco em otimização e longevidade.
        </p>

        <div className="diff-grid">
          {items.map(item => (
            <div key={item.num} className="diff-card">
              <div className="diff-num">{item.num}</div>
              <item.Icon />
              <h4>{item.title}<br />{item.titleBreak}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
