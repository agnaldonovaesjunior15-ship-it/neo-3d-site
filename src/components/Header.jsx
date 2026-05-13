import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Header.css'

const navLinks = [
  { to: '/manutencao',  label: 'Manutenção' },
  { to: '/contratos',   label: 'Contratos' },
  { to: '/treinamento', label: 'Treinamento' },
  { to: '/materiais',   label: 'Materiais' },
  { to: '/fabricacao',  label: 'Fabricação' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="hd-inner">
        <Logo showTagline />

        <nav className="nav-main" aria-label="Navegação principal">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contato" className="cta-pill desktop-only">Fale Conosco</Link>

        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Menu mobile (drawer) */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav aria-label="Navegação móvel">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={handleNavClick}
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contato" onClick={handleNavClick} className="mobile-cta">
            Fale Conosco →
          </Link>
        </nav>
      </div>
    </header>
  )
}
