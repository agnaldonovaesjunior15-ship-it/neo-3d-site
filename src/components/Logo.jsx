import { Link } from 'react-router-dom'
import './Logo.css'

/**
 * Logo NEO 3D — construído em CSS puro conforme manual de identidade.
 * Aponta para a Home via Link do router.
 */
export default function Logo({ showTagline = false }) {
  return (
    <Link to="/" className="logo" aria-label="NEO 3D — Página inicial">
      <span className="neoN">NEO</span>
      <span className="neo3">3D</span>
      {showTagline && (
        <span className="logo-tag">
          Multisserviços em<br />Manufatura Aditiva
        </span>
      )}
    </Link>
  )
}
