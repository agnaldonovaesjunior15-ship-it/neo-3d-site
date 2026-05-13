import PageHero     from '../components/shared/PageHero.jsx'
import ContentBlock from '../components/shared/ContentBlock.jsx'
import FinalCTA     from '../components/FinalCTA.jsx'

export default function Manutencao() {
  return (
    <>
      <PageHero
        eyebrow="/ Manutenção & Suporte Técnico"
        title="Manutenção especializada<br />para <em>impressoras 3D.</em>"
        subtitle="Garanta a máxima disponibilidade e performance de seus equipamentos com a expertise multimarca da NEO 3D em FDM, SLA e FGF."
        primaryCTA={{ to: '/contato',    label: 'Solicitar Orçamento' }}
        secondaryCTA={{ to: '/contratos', label: 'Conhecer os Planos' }}
      />

      {/* CORRETIVA */}
      <ContentBlock
        num="/ 01"
        eyebrow="Manutenção Corretiva"
        title="Soluções rápidas<br />e <em>eficazes.</em>"
      >
        <div className="col-2">
          <div>
            <p>
              Quando sua impressora 3D apresenta falhas, nossa equipe age com agilidade
              para diagnosticar e resolver o problema, <strong>minimizando o tempo de
              inatividade</strong>. Contamos com vasto estoque de peças de reposição e
              técnicos especializados para restaurar a funcionalidade do equipamento.
            </p>
            <p>
              O diagnóstico é entregue em até 24h úteis, com escopo, prazo e custo
              definidos antes do início do reparo — sem surpresas.
            </p>
          </div>
          <ul className="feature-list">
            <li><div><b>Diagnóstico Preciso</b> · análise técnica detalhada do equipamento e da falha</div></li>
            <li><div><b>Reparo Rápido</b> · execução com SLA acordado em proposta</div></li>
            <li><div><b>Peças Originais</b> · estoque de componentes de fabricantes oficiais</div></li>
            <li><div><b>Garantia do Serviço</b> · cobertura sobre os reparos executados</div></li>
          </ul>
        </div>
      </ContentBlock>

      {/* PREVENTIVA */}
      <ContentBlock
        num="/ 02"
        eyebrow="Manutenção Preventiva"
        title="Evite paradas<br /><em>inesperadas.</em>"
        alt
      >
        <div className="col-2">
          <div>
            <p>
              A melhor forma de garantir longevidade e performance é a manutenção
              preventiva. Nossos programas personalizados incluem inspeções regulares,
              calibrações e ajustes que <strong>prolongam a vida útil</strong> e evitam
              falhas críticas.
            </p>
            <p>
              Cada equipamento recebe um plano específico baseado em horas de operação,
              ambiente e materiais utilizados.
            </p>
          </div>
          <ul className="feature-list">
            <li><div><b>Inspeções Periódicas</b> · calendário definido em contrato</div></li>
            <li><div><b>Calibração e Ajustes</b> · precisão dimensional e térmica</div></li>
            <li><div><b>Limpeza Técnica</b> · extrusores, eixos, espelhos, tanques</div></li>
            <li><div><b>Relatórios de Saúde</b> · histórico técnico por equipamento</div></li>
          </ul>
        </div>
      </ContentBlock>

      {/* SUPORTE */}
      <ContentBlock
        num="/ 03"
        eyebrow="Suporte Técnico Especializado"
        title="Expertise<br />ao seu <em>alcance.</em>"
        dark
        intro="Equipe pronta para auxiliar sua operação com orientação técnica, resolução de dúvidas e acompanhamento contínuo — via telefone, e-mail e plataformas de comunicação."
      >
        <div className="card-grid cols-4">
          {[
            { tag: '/ 01', title: 'Atendimento Rápido',     desc: 'Resposta a chamados em até 24h úteis, com priorização para contratos ativos.' },
            { tag: '/ 02', title: 'Orientação Especializada', desc: 'Técnicos certificados em FDM e SLA para tirar dúvidas operacionais e técnicas.' },
            { tag: '/ 03', title: 'Resolução de Dúvidas',     desc: 'Troubleshooting remoto antes do deslocamento, economizando tempo e custo.' },
            { tag: '/ 04', title: 'Acompanhamento Contínuo', desc: 'Follow-up estruturado após o serviço, com indicadores de performance.' },
          ].map(c => (
            <div key={c.tag} className="card">
              <div className="card-tag">{c.tag}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <FinalCTA />
    </>
  )
}
