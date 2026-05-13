import PageHero     from '../components/shared/PageHero.jsx'
import ContentBlock from '../components/shared/ContentBlock.jsx'
import FinalCTA     from '../components/FinalCTA.jsx'

const programs = [
  {
    num: '/ 01',
    title: 'Operação Básica FDM',
    desc: 'Princípios de impressão FDM, fluxo de slicing, preparação de bed, materiais comuns (PLA, ABS, PETG) e troubleshooting básico.',
    duration: '16h',
    level: 'Iniciante',
  },
  {
    num: '/ 02',
    title: 'Operação Básica SLA',
    desc: 'Resinas fotopoliméricas, fluxo de pós-cura, segurança no manuseio, calibração de exposição e acabamento de peças.',
    duration: '12h',
    level: 'Iniciante',
  },
  {
    num: '/ 03',
    title: 'Manutenção de 1º Nível',
    desc: 'Limpeza técnica, troca de componentes consumíveis, nivelamento, calibração de eixos e diagnóstico de falhas básicas.',
    duration: '20h',
    level: 'Intermediário',
  },
  {
    num: '/ 04',
    title: 'Otimização de Parâmetros',
    desc: 'Velocidade, temperatura, retração, infill, suportes — ajustes finos para qualidade superior e produtividade.',
    duration: '16h',
    level: 'Intermediário',
  },
  {
    num: '/ 05',
    title: 'Segurança e Boas Práticas',
    desc: 'Normas de operação, ventilação, descarte de resíduos, EPIs, organização de bancada e procedimentos padrão.',
    duration: '8h',
    level: 'Todos os níveis',
  },
  {
    num: '/ 06',
    title: 'In-Company Personalizado',
    desc: 'Programa desenhado sob medida para sua operação, com base em equipamentos, materiais e processos específicos da sua empresa.',
    duration: 'Customizado',
    level: 'Sob demanda',
  },
]

export default function Treinamento() {
  return (
    <>
      <PageHero
        eyebrow="/ Treinamento Técnico Operacional"
        title="Capacitação técnica<br />para sua <em>equipe.</em>"
        subtitle="Eleve o conhecimento e a autonomia de seus operadores com treinamentos práticos e teóricos da NEO 3D, adaptados às necessidades reais da operação."
        primaryCTA={{ to: '/contato', label: 'Solicitar Treinamento' }}
      />

      <ContentBlock
        num="/ 01"
        eyebrow="Programas"
        title="Programas abrangentes<br />para <em>todos os níveis.</em>"
        intro="Desenvolvemos treinamentos práticos e teóricos, da operação básica à manutenção de primeiro nível e otimização avançada de parâmetros."
      >
        <div className="card-grid cols-3">
          {programs.map(p => (
            <div key={p.num} className="card">
              <div className="card-tag">{p.num}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(0,0,0,.07)',
                display: 'flex',
                gap: '1.5rem',
                fontFamily: 'DM Mono, monospace',
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: 'var(--g400)',
                textTransform: 'uppercase',
              }}>
                <span>{p.duration}</span>
                <span style={{ color: 'var(--teal-core)' }}>{p.level}</span>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock
        num="/ 02"
        eyebrow="Metodologia"
        title="Aprender fazendo,<br />não <em>assistindo.</em>"
        dark
      >
        <div className="col-2">
          <div>
            <p>
              Nossos treinamentos combinam <strong>fundamentos teóricos</strong> com{' '}
              <strong>prática supervisionada</strong> em equipamentos reais. Cada
              módulo termina com avaliação aplicada — não com prova de papel.
            </p>
            <p>
              Treinamentos podem ser ministrados na sede da NEO 3D ou in-company,
              com material didático próprio entregue a cada participante.
            </p>
          </div>
          <ul className="feature-list">
            <li><div><b>Turmas reduzidas</b> · máximo 8 participantes por módulo</div></li>
            <li><div><b>Equipamentos reais</b> · prática em FDM e SLA de mercado</div></li>
            <li><div><b>Material didático</b> · apostilas e checklists para consulta posterior</div></li>
            <li><div><b>Certificado NEO 3D</b> · ao final de cada programa concluído</div></li>
          </ul>
        </div>
      </ContentBlock>

      <FinalCTA />
    </>
  )
}
