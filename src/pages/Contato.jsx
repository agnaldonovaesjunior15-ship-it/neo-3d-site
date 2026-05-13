import { useState } from 'react'
import PageHero from '../components/shared/PageHero.jsx'
import './Contato.css'

const initialForm = {
  nome: '',
  empresa: '',
  email: '',
  telefone: '',
  assunto: 'Manutenção',
  mensagem: '',
}

const assuntos = ['Manutenção', 'Contratos', 'Treinamento', 'Materiais', 'Fabricação', 'Outro']

export default function Contato() {
  const [form, setForm]       = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Monta link mailto: com os dados do formulário
    const body = [
      `Nome: ${form.nome}`,
      `Empresa: ${form.empresa}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      `Assunto: ${form.assunto}`,
      ``,
      `Mensagem:`,
      form.mensagem,
    ].join('\n')

    const mailto = `mailto:contato@neo3d.com.br`
      + `?subject=${encodeURIComponent(`[Site] ${form.assunto} — ${form.empresa || form.nome}`)}`
      + `&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="/ Contato"
        title="Fale <em>conosco.</em>"
        subtitle="Nossa equipe de especialistas está pronta para atender sua operação. Resposta em até 24h úteis."
      />

      <section className="block">
        <div className="container">
          <div className="contato-grid">

            {/* FORMULÁRIO */}
            <div className="form-block">
              <div className="sec-num">/ 01 — Envie sua mensagem</div>
              <h2 className="sec-title" style={{ fontSize: '38px' }}>
                Preencha o<br />formulário abaixo.
              </h2>
              <div className="sec-rule" />

              {submitted ? (
                <div className="form-success">
                  <div className="card-tag">/ Quase lá</div>
                  <h3>Seu cliente de e-mail foi aberto.</h3>
                  <p>
                    Finalize o envio pelo seu programa de e-mail. Se preferir falar
                    direto, use os canais ao lado.
                  </p>
                  <button
                    type="button"
                    className="btn-ghost-dark"
                    onClick={() => { setSubmitted(false); setForm(initialForm) }}
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contato-form">
                  <div className="form-row">
                    <label className="form-field">
                      <span>Nome *</span>
                      <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label className="form-field">
                      <span>Empresa</span>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label className="form-field">
                      <span>E-mail *</span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label className="form-field">
                      <span>Telefone</span>
                      <input
                        type="tel"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                      />
                    </label>
                  </div>

                  <label className="form-field">
                    <span>Assunto *</span>
                    <select
                      name="assunto"
                      value={form.assunto}
                      onChange={handleChange}
                      required
                    >
                      {assuntos.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </label>

                  <label className="form-field">
                    <span>Mensagem *</span>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      rows="6"
                      required
                      placeholder="Descreva sua necessidade, equipamentos, urgência..."
                    />
                  </label>

                  <button type="submit" className="btn-primary form-submit">
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>

            {/* CANAIS DIRETOS */}
            <aside className="canais-block">
              <div className="canal-card">
                <div className="card-tag">/ Canais diretos</div>
                <h3>Prefere falar agora?</h3>

                <a href="https://wa.me/5511939277467" className="canal-item">
                  <div className="canal-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>(11) 93927-7467</span>
                  </div>
                </a>

                <a href="mailto:contato@neo3d.com.br" className="canal-item">
                  <div className="canal-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2"/>
                      <path d="m3 7 9 6 9-6"/>
                    </svg>
                  </div>
                  <div>
                    <strong>E-mail</strong>
                    <span>contato@neo3d.com.br</span>
                  </div>
                </a>

                <div className="canal-info">
                  <div className="card-tag">/ Localização</div>
                  <p>
                    Atendemos <strong>São Paulo</strong> (Capital, Mogi das Cruzes,
                    Sorocaba) e Grande SP, com capacidade de atendimento em todo o
                    território nacional via deslocamento agendado.
                  </p>
                </div>

                <div className="canal-info">
                  <div className="card-tag">/ Horário</div>
                  <p>
                    Segunda a sexta · 8h às 18h<br />
                    Plantão para contratos Premium · 24/7
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
