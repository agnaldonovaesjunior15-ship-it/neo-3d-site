import { Link } from 'react-router-dom'
import PageHero     from '../components/shared/PageHero.jsx'
import ContentBlock from '../components/shared/ContentBlock.jsx'

export default function ContratoModelo() {
  return (
    <>
      <PageHero
        eyebrow="/ Modelo de Contrato"
        title="Transparência<br />e <em>segurança.</em>"
        subtitle="Modelo de contrato de manutenção da NEO 3D, elaborado para garantir clareza dos termos e previsibilidade nos serviços prestados."
        primaryCTA={{ to: '/contato', label: 'Solicitar Versão Personalizada' }}
      />

      <ContentBlock
        num="/ 01"
        eyebrow="Estrutura do Contrato"
        title="O que está<br /><em>previsto em contrato.</em>"
        intro="O modelo detalha serviços inclusos, responsabilidades de ambas as partes e condições gerais da parceria. Cada contrato é adaptado ao plano escolhido e à frota do cliente."
      >
        <div className="card-grid cols-3">
          {[
            { tag: '/ Cláusula 01', title: 'Objeto e Escopo',     desc: 'Descrição detalhada dos serviços inclusos, equipamentos cobertos e tecnologias atendidas.' },
            { tag: '/ Cláusula 02', title: 'Prazos e Vigência',   desc: 'Duração do contrato, renovações automáticas e condições de prorrogação.' },
            { tag: '/ Cláusula 03', title: 'Obrigações da NEO 3D',desc: 'Compromissos da NEO 3D quanto à execução, prazos, qualidade e suporte.' },
            { tag: '/ Cláusula 04', title: 'Obrigações do Cliente', desc: 'Acesso aos equipamentos, condições de operação e disponibilidade para atendimento.' },
            { tag: '/ Cláusula 05', title: 'SLAs e Indicadores',  desc: 'Acordos de nível de serviço, tempos de resposta e métricas de performance.' },
            { tag: '/ Cláusula 06', title: 'Valores e Reajustes', desc: 'Forma de pagamento, periodicidade, índices de reajuste e condições de pagamento.' },
            { tag: '/ Cláusula 07', title: 'Confidencialidade',   desc: 'Proteção de informações técnicas, comerciais e operacionais de ambas as partes.' },
            { tag: '/ Cláusula 08', title: 'Rescisão',            desc: 'Hipóteses, prazos e procedimentos para encerramento contratual.' },
            { tag: '/ Cláusula 09', title: 'Foro e Jurisdição',   desc: 'Definição de foro competente para resolução de eventuais conflitos.' },
          ].map(c => (
            <div key={c.tag} className="card">
              <div className="card-tag">{c.tag}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock
        num="/ 02"
        eyebrow="Download"
        title="Acesse o modelo<br /><em>completo.</em>"
        dark
        intro="O contrato pode ser baixado em PDF, revisado pela sua equipe jurídica e personalizado conforme as particularidades de cada operação."
      >
        <div style={{
          background: 'rgba(255,255,255,.03)',
          border: '1px solid rgba(255,255,255,.08)',
          borderRadius: '12px',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              letterSpacing: '2.5px',
              color: 'var(--teal-core)',
              textTransform: 'uppercase',
              marginBottom: '.75rem',
            }}>
              / PDF · ~120KB
            </div>
            <h4 style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '26px',
              fontWeight: 800,
              color: 'var(--white)',
              letterSpacing: '-.3px',
              marginBottom: '.5rem',
            }}>
              Contrato de Manutenção · Modelo Padrão
            </h4>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,.55)',
              lineHeight: 1.7,
            }}>
              Versão atualizada em 2026. Para versão assinada via Odoo, solicite o
              documento personalizado ao nosso comercial.
            </p>
          </div>
          <Link to="/contato" className="btn-primary">Solicitar</Link>
        </div>
      </ContentBlock>
    </>
  )
}
