import ServiceCard from './ServiceCard.jsx'
import './Services.css'

const services = [
  {
    tag: '/ Pilar 01 · Destaque',
    title: 'Manutenção e',
    titleBreak: 'Suporte Técnico',
    description: 'Garanta a continuidade da produção com manutenção corretiva, preventiva e suporte multimarca para impressoras industriais e profissionais.',
    features: ['Diagnóstico ≤ 24h', 'Peças e insumos especializados', 'Atendimento on-site e remoto'],
    link: '/manutencao',
    linkLabel: 'Ver detalhes',
    featured: true,
  },
  {
    tag: '/ Pilar 02',
    title: 'Contratos de',
    titleBreak: 'Manutenção',
    description: 'Planos personalizados que transformam custos imprevisíveis em investimento estratégico — com SLA, gestão de frota e relatórios de performance.',
    features: ['Planos Essencial · Performance · Premium', 'Suporte prioritário on-site', 'Relatórios mensais de saúde'],
    link: '/contratos',
    linkLabel: 'Ver planos',
  },
  {
    tag: '/ Pilar 03',
    title: 'Treinamento Técnico',
    titleBreak: 'Operacional',
    description: 'Capacite sua equipe para extrair o máximo das impressoras 3D — da operação básica à manutenção de primeiro nível e otimização de parâmetros.',
    features: ['Operação FDM · SLA', 'Manutenção de 1º nível', 'Programas in-company'],
    link: '/treinamento',
    linkLabel: 'Conheça os cursos',
  },
  {
    tag: '/ Pilar 04',
    title: 'Materiais',
    titleBreak: 'e Insumos',
    description: 'Filamentos e resinas de alta performance, selecionados para resultados superiores — PLA, ABS, PETG, Nylon, resinas de engenharia e odontológicas.',
    features: ['Filamentos FDM premium', 'Resinas SLA / DLP / LCD', 'Consultoria de materiais'],
    link: '/materiais',
    linkLabel: 'Explorar produtos',
  },
  {
    tag: '/ Pilar 05',
    title: 'Fabricação Digital',
    titleBreak: 'e Manufatura Híbrida',
    description: 'Prototipagem rápida e produção de peças funcionais em polímero e metal — combinando versatilidade aditiva e resistência industrial.',
    features: ['Prototipagem rápida', 'Polímero (FDM/SLA) + Metal', 'Produção de baixo volume'],
    link: '/fabricacao',
    linkLabel: 'Ver capacidades',
  },
]

export default function Services() {
  return (
    <section className="block alt">
      <div className="container">
        <div className="serv-header">
          <div>
            <div className="sec-num">/ 04 — Portfólio</div>
            <h2 className="sec-title">Soluções em<br />manufatura aditiva.</h2>
            <div className="sec-rule" />
          </div>
          <p className="serv-header-aside">
            Da manutenção corretiva à consultoria estratégica, oferecemos um portfólio
            desenhado para atender às necessidades específicas de cada operação industrial.
          </p>
        </div>

        <div className="serv-grid">
          {services.map(s => (
            <ServiceCard key={s.link} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
