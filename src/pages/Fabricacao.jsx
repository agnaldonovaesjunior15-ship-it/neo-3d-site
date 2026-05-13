import PageHero     from '../components/shared/PageHero.jsx'
import ContentBlock from '../components/shared/ContentBlock.jsx'
import FinalCTA     from '../components/FinalCTA.jsx'

export default function Fabricacao() {
  return (
    <>
      <PageHero
        eyebrow="/ Fabricação Digital & Manufatura Híbrida"
        title="Suas ideias em<br /><em>realidade.</em>"
        subtitle="Prototipagem rápida e produção de peças funcionais com tecnologia de ponta — polímero, metal e processos híbridos para o que sua aplicação exige."
        primaryCTA={{ to: '/contato', label: 'Solicitar Orçamento' }}
      />

      <ContentBlock
        num="/ 01"
        eyebrow="Prototipagem Rápida"
        title="Valide suas ideias<br />com <em>agilidade.</em>"
      >
        <div className="col-2">
          <div>
            <p>
              Transforme projetos em <strong>protótipos funcionais</strong> em tempo
              recorde. Nossa capacidade de impressão 3D permite testar conceitos,
              validar designs e acelerar o ciclo de desenvolvimento de produtos.
            </p>
            <p>
              Recebemos arquivos STL, STEP, OBJ e modelos CAD nativos. Análise de
              imprimibilidade é parte do orçamento, sem custo adicional.
            </p>
          </div>
          <ul className="feature-list">
            <li><div><b>Validação de design</b> · forma, encaixe e ergonomia testados em peça real</div></li>
            <li><div><b>Testes funcionais</b> · peças funcionais para validação de uso</div></li>
            <li><div><b>Iteração rápida</b> · ciclos curtos de protótipo → teste → ajuste</div></li>
            <li><div><b>Redução de custos</b> · descobrir problemas antes da ferramentaria</div></li>
          </ul>
        </div>
      </ContentBlock>

      <ContentBlock
        num="/ 02"
        eyebrow="Manufatura Híbrida"
        title="O melhor dos<br /><em>dois mundos.</em>"
        alt
        intro="Combinamos a versatilidade da impressão 3D de polímeros com a resistência e durabilidade da impressão 3D de metais. Componentes complexos e funcionais para diversas aplicações industriais."
      >
        <div className="card-grid cols-4">
          {[
            { tag: '/ 01', title: 'Polímero',          desc: 'Peças em FDM e SLA com diversos materiais técnicos — prototipagem e produção.' },
            { tag: '/ 02', title: 'Metal',             desc: 'Peças metálicas via microfusão e processos aditivos para componentes industriais.' },
            { tag: '/ 03', title: 'Híbridos',          desc: 'Componentes que combinam polímero e metal em uma única peça funcional.' },
            { tag: '/ 04', title: 'Baixo volume',      desc: 'Produção de lotes pequenos e médios sem custo de ferramenta.' },
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
        num="/ 03"
        eyebrow="Fluxo de Trabalho"
        title="Do briefing<br />à <em>entrega.</em>"
        dark
      >
        <div className="card-grid cols-4">
          {[
            { tag: '/ Etapa 01', title: 'Briefing',     desc: 'Recebemos arquivo CAD/STL e requisitos de uso, material e prazo.' },
            { tag: '/ Etapa 02', title: 'Análise',      desc: 'Avaliação de imprimibilidade, recomendação de tecnologia e material.' },
            { tag: '/ Etapa 03', title: 'Produção',     desc: 'Impressão, pós-processamento e controle de qualidade dimensional.' },
            { tag: '/ Etapa 04', title: 'Entrega',      desc: 'Despacho ou retirada com laudo técnico e certificado de conformidade.' },
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
