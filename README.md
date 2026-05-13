# NEO 3D — Site Completo (React + Vite + React Router)

Site institucional completo da NEO 3D — multisserviços em manufatura aditiva.
**8 páginas** roteadas, formulário de contato funcional, identidade visual oficial.

Stack: **Vite + React 18 + React Router v6 + CSS puro**.

---

## Como rodar

Pré-requisito: **Node.js 18+**.

```bash
npm install         # 1. instalar dependências
npm run dev         # 2. iniciar dev server (http://localhost:5173)
npm run build       # 3. build de produção
npm run preview     # 4. ver o build localmente
```

---

## Páginas do site

| Rota                  | Página                              |
|-----------------------|-------------------------------------|
| `/`                   | Home (landing principal)            |
| `/manutencao`         | Manutenção e Suporte Técnico        |
| `/contratos`          | Contratos de Manutenção (planos)    |
| `/treinamento`        | Treinamento Técnico Operacional     |
| `/materiais`          | Materiais e Insumos                 |
| `/fabricacao`         | Fabricação Digital e Manufatura Híbrida |
| `/contato`            | Contato (formulário funcional)      |
| `/contrato-modelo`    | Modelo de Contrato                  |
| `*` (qualquer outra)  | 404 Not Found                       |

Todas as páginas reaproveitam o `Header`, `Footer` e o bloco `FinalCTA`.

---

## Estrutura de pastas

```
neo3d-full/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                 ← entry point
    ├── App.jsx                  ← BrowserRouter + Routes
    ├── styles/
    │   └── global.css           ← variáveis de marca + utilitários
    ├── components/
    │   ├── ScrollToTop.jsx      ← reseta scroll ao trocar rota
    │   ├── Logo.jsx + .css
    │   ├── Header.jsx + .css    ← NavLink + menu mobile (burger)
    │   ├── Footer.jsx + .css    ← Link do router em todos os links
    │   ├── Hero.jsx + .css      ← bloco hero (só na Home)
    │   ├── Problem.jsx + .css
    │   ├── Differentials.jsx + .css
    │   ├── Services.jsx + .css
    │   ├── ServiceCard.jsx
    │   ├── Testimonial.jsx + .css
    │   ├── Brands.jsx + .css
    │   ├── FinalCTA.jsx + .css  ← reutilizado em quase todas as páginas
    │   └── shared/
    │       ├── PageHero.jsx + .css      ← hero compacto das páginas internas
    │       └── ContentBlock.jsx + .css  ← seção genérica + classes utilitárias
    └── pages/
        ├── Home.jsx             ← compõe os blocos da landing
        ├── Manutencao.jsx
        ├── Contratos.jsx + .css ← tem CSS próprio (planos)
        ├── Treinamento.jsx
        ├── Materiais.jsx
        ├── Fabricacao.jsx
        ├── Contato.jsx + .css   ← formulário funcional via mailto
        ├── ContratoModelo.jsx
        └── NotFound.jsx
```

---

## Funcionalidades implementadas

- ✅ **Roteamento real** com React Router v6
- ✅ **Navegação ativa** — link da página atual destacado no menu
- ✅ **Menu mobile (drawer)** — burger animado com transição suave
- ✅ **Scroll-to-top** automático ao trocar de rota
- ✅ **Formulário de contato** com validação HTML5 + envio via `mailto:`
- ✅ **Estado de sucesso** após envio do formulário
- ✅ **Página 404** customizada com identidade da marca
- ✅ **Identidade visual oficial** (teal #0F928C, Barlow, DM Mono)
- ✅ **Responsivo** em todos os breakpoints (desktop, tablet, mobile)
- ✅ **Animações de entrada** em todos os heroes
- ✅ **Componentes compartilhados** (`PageHero`, `ContentBlock`) reutilizados nas 7 páginas internas

---

## Convenções de marca

- **Cor principal:** teal `#0F928C` (variável `--teal-core`)
- **Acentos com limites do manual:**
  - Lima `#BEEE3B` → máx 10% (card destaque)
  - Laranja `#F97316` → máx 8% (número 73% da Home)
- **Tipografia oficial:**
  - Barlow Condensed → títulos
  - Barlow → corpo
  - DM Mono → tags, números técnicos, labels
- **Logo:** sempre via componente `<Logo />`, construído em CSS

---

## Próximos passos sugeridos

- Integrar formulário a um backend real (EmailJS, Formspree, API própria)
- Adicionar página de blog / notícias
- Schema.org / SEO meta tags por página (react-helmet)
- Analytics (Plausible, Umami)
- Animações com Framer Motion ao scrollar
- Deploy (Vercel, Netlify, Cloudflare Pages)

---

© 2026 NEO 3D
