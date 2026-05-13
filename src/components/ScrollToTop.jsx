import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Sempre que a rota muda, leva o scroll para o topo.
 * Sem isso o usuário troca de página e fica no meio dela.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
