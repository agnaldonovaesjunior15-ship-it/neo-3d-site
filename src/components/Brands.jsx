import './Brands.css'

const brands = [
  { name: 'Creality',   tech: 'FDM' },
  { name: 'Bambu Lab',  tech: 'FDM' },
  { name: 'Elegoo',     tech: 'SLA · FDM' },
  { name: 'Anycubic',   tech: 'SLA · FDM' },
  { name: 'Voron',      tech: 'FDM' },
  { name: 'Prusa',      tech: 'FDM' },
]

export default function Brands() {
  return (
    <section className="block alt">
      <div className="container">
        <div className="brands-wrap">
          <div className="brands-head">
            <div>
              <div className="sec-num">/ 06 — Expertise multimarca</div>
              <h2>
                Atendemos as principais<br />
                <em>marcas do mercado.</em>
              </h2>
            </div>
            <p>
              Trabalhamos com as impressoras 3D mais renomadas, garantindo serviço
              técnico especializado, peças de reposição compatíveis e calibração
              dentro das especificações de cada fabricante.
            </p>
          </div>

          <div className="brands-grid">
            {brands.map(b => (
              <div key={b.name} className="brand">
                {b.name}
                <small>{b.tech}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
