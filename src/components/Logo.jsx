import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.gif'
import './Logo.css'

export default function Logo({ showTagline = false }) {
  return (
    <Link to="/" className="logo" aria-label="NEO 3D — Página inicial">
      <img src={logoImg} alt="NEO 3D" className="logo-img" />
      {showTagline && (
        <span className="logo-tag">
          Multisserviços em<br />Manufatura Aditiva
        </span>
      )}
    </Link>
  )
}
