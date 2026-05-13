import PageHero     from '../components/shared/PageHero.jsx'
import ContentBlock from '../components/shared/ContentBlock.jsx'
import FinalCTA     from '../components/FinalCTA.jsx'

const filaments = [
  { num: '/ 01', name: 'PLA',  desc: 'Uso geral, fácil impressão, ideal para protótipos e peças decorativas. Disponível em diversas cores e acabamentos.' },
  { num: '/ 02', name: 'ABS',  desc: 'Alta resistência mecânica e térmica, indicado para peças funcionais e componentes técnicos.' },
  { num: '/ 03', name: 'PETG', desc: 'Combinação de resistência e durabilidade, com baixa retração. Excelente para peças expostas a impacto.' },
  { num: '/ 04', name: 'Especiais', desc: 'Nylon, flexíveis (TPU), condutivos e reforçados com fibra. Para aplicações de engenharia.' },
]

const resins = [
  { num: '/ 01', name: 'Padrão',     desc: 'Uso geral em SLA/DLP/LCD. Alta precisão dimensional e acabamento liso para protótipos visuais.' },
  { num: '/ 02', name: 'Engenharia', desc: 'Alta resistência mecânica, indicada para peças funcionais que exigem rigidez e durabilidade.' },
  { num: '/ 03', name: 'Flexível',   desc: 'Resinas com propriedades elastoméricas, ideais para gaxetas, prensas e prototipagem de soft-touch.' },
  { num: '/ 04', name: 'Odontológica', desc: 'Resinas biocompatíveis e específicas para modelos, guias cirúrgicas e aplicações dentárias.' },
]

export default function Materiais() {
  return (
    <>
      <PageHero
        eyebrow="/ Materiais & Insumos"
        title="Materiais de alta performance<br />para sua <em>impressão 3D.</em>"
        subtitle="Filamentos e resinas otimizados para resultados superiores e aplicações industriais exigentes — selecionados com critério técnico."
        primaryCTA={{ to: '/contato', label: 'Solicitar Consultoria' }}
      />

      <ContentBlock
        num="/ 01"
        eyebrow="Filamentos FDM"
        title="Qualidade e<br /><em>versatilidade.</em>"
        intro="Linha completa de filamentos selecionados para garantir aderência, resistência e acabamento consistentes em suas peças."
      >
        <div className="card-grid cols-4">
          {filaments.map(f => (
            <div key={f.num} className="card">
              <div className="card-tag">{f.num}</div>
              <h4>{f.name}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock
        num="/ 02"
        eyebrow="Resinas SLA / DLP / LCD"
        title="Precisão e<br /><em>detalhes finos.</em>"
        alt
        intro="Resinas fotopoliméricas ideais para aplicações que exigem alta precisão dimensional, detalhes finos e superfícies lisas."
      >
        <div className="card-grid cols-4">
          {resins.map(r => (
            <div key={r.num} className="card">
              <div className="card-tag">{r.num}</div>
              <h4>{r.name}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock
        num="/ 03"
        eyebrow="Consultoria Técnica"
        title="Material certo<br />para <em>cada aplicação.</em>"
        dark
      >
        <div className="col-2">
          <div>
            <p>
              Escolher o material errado custa caro: retrabalho, falhas em campo,
              peça que não atende ao requisito. Nossa equipe ajuda a <strong>especificar
              o material adequado</strong> com base em uso final, ambiente operacional
              e processo de manufatura.
            </p>
            <p>
              Consultoria gratuita para clientes com contrato ativo de manutenção.
            </p>
          </div>
          <ul className="feature-list">
            <li><div><b>Análise de aplicação</b> · uso final, esforços, ambiente</div></li>
            <li><div><b>Recomendação técnica</b> · material, parâmetros e pós-processo</div></li>
            <li><div><b>Testes piloto</b> · validação antes da compra de lote</div></li>
            <li><div><b>Documentação</b> · ficha técnica e especificação registrada</div></li>
          </ul>
        </div>
      </ContentBlock>

      <FinalCTA />
    </>
  )
}
