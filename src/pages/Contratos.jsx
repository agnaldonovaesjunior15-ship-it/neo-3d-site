import { Link } from 'react-router-dom'
import PageHero     from '../components/shared/PageHero.jsx'
import ContentBlock from '../components/shared/ContentBlock.jsx'
import FinalCTA     from '../components/FinalCTA.jsx'
import './Contratos.css'

const benefits = [
  { num: '/ 01', title: 'Uptime garantido',          desc: 'SLA contratual de disponibilidade dos equipamentos, com indicadores mensais.' },
  { num: '/ 02', title: 'Redução de custos',         desc: 'Custos imprevisíveis viram investimento previsível, com economia de escala.' },
  { num: '/ 03', title: 'Suporte prioritário',       desc: 'Atendimento priorizado em fila, com tempo de resposta reduzido.' },
  { num: '/ 04', title: 'Preventiva inclusa',        desc: 'Inspeções periódicas, calibração e ajustes no escopo do contrato.' },
  { num: '/ 05', title: 'Relatórios de performance', desc: 'Indicadores mensais de saúde, MTBF e MTTR por equipamento.' },
  { num: '/ 06', title: 'Gestão de ativos',          desc: 'Inventário, histórico técnico e ciclo de vida da frota gerido pela NEO 3D.' },
]

const plans = [
  {
    name: 'Essencial',
    tag: '/ Para frotas pequenas',
    price: 'Sob consulta',
    features: [
      'Manutenção corretiva',
      'Suporte remoto em horário comercial',
      'Diagnóstico em até 48h úteis',
      'Peças e deslocamento à parte',
    ],
  },
  {
    name: 'Performance',
    tag: '/ Mais escolhido',
    price: 'Sob consulta',
    featured: true,
    features: [
      'Tudo do Essencial',
      'Manutenção preventiva inclusa',
      'Relatórios mensais de saúde',
      'Diagnóstico em até 24h úteis',
      'Suporte remoto estendido',
    ],
  },
  {
    name: 'Premium',
    tag: '/ Operações críticas',
    price: 'Sob consulta',
    features: [
      'Tudo do Performance',
      'Atendimento on-site prioritário',
      'Gestão de peças sob estoque',
      'SLA de uptime contratual',
      'Account manager dedicado',
    ],
  },
]

export default function Contratos() {
  return (
    <>
      <PageHero
        eyebrow="/ Contratos de Manutenção"
        title="Previsibilidade e segurança<br />para sua <em>frota.</em>"
        subtitle="Garanta o uptime de suas impressoras 3D com planos personalizados, suporte prioritário e gestão de ativos sob responsabilidade da NEO 3D."
        primaryCTA={{ to: '/contato',         label: 'Solicitar Proposta' }}
        secondaryCTA={{ to: '/contrato-modelo', label: 'Ver Modelo de Contrato' }}
      />

      <ContentBlock
        num="/ 01"
        eyebrow="Benefícios"
        title="Vantagens de um<br /><em>contrato NEO 3D.</em>"
        intro="Nossos contratos transformam custos imprevisíveis em investimentos estratégicos, oferecendo tranquilidade e eficiência operacional."
      >
        <div className="card-grid cols-3">
          {benefits.map(b => (
            <div key={b.num} className="card">
              <div className="card-tag">{b.num}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* PLANOS */}
      <section className="block alt">
        <div className="container">
          <div className="sec-num">/ 02 — Planos</div>
          <h2 className="sec-title">
            Escolha o plano<br />ideal para sua <em style={{ fontStyle: 'normal', color: 'var(--teal-core)' }}>necessidade.</em>
          </h2>
          <div className="sec-rule" />
          <p className="sec-intro">
            Três modalidades desenhadas para se adequar ao tamanho e à complexidade
            de sua frota de impressoras 3D.
          </p>

          <div className="plans-grid">
            {plans.map(p => (
              <article key={p.name} className={`plan-card ${p.featured ? 'feat' : ''}`}>
                {p.featured && <div className="plan-badge">Recomendado</div>}
                <div className="plan-tag">{p.tag}</div>
                <h3>{p.name}</h3>
                <div className="plan-price">{p.price}</div>
                <ul>
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contato" className={p.featured ? 'btn-primary' : 'btn-ghost-dark'}>
                  Solicitar Proposta
                </Link>
              </article>
            ))}
          </div>

          <div className="contract-link">
            <div>
              <div className="card-tag">/ Documento</div>
              <h4>Modelo de Contrato</h4>
              <p>Veja os termos, escopo e condições gerais aplicáveis aos planos.</p>
            </div>
            <Link to="/contrato-modelo" className="btn-primary">Ver Modelo</Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
