import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home          from './pages/Home.jsx'
import Manutencao    from './pages/Manutencao.jsx'
import Contratos     from './pages/Contratos.jsx'
import Treinamento   from './pages/Treinamento.jsx'
import Materiais     from './pages/Materiais.jsx'
import Fabricacao    from './pages/Fabricacao.jsx'
import Contato       from './pages/Contato.jsx'
import ContratoModelo from './pages/ContratoModelo.jsx'
import NotFound      from './pages/NotFound.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/manutencao"      element={<Manutencao />} />
          <Route path="/contratos"       element={<Contratos />} />
          <Route path="/treinamento"     element={<Treinamento />} />
          <Route path="/materiais"       element={<Materiais />} />
          <Route path="/fabricacao"      element={<Fabricacao />} />
          <Route path="/contato"         element={<Contato />} />
          <Route path="/contrato-modelo" element={<ContratoModelo />} />
          <Route path="*"                element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
