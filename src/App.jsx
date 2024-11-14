import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Encuestas from './components/Encuestas'
import EncuestaDetalle from './components/EncuestaDetalle'

export default function App () {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Encuestas />} index={true}/>
        <Route path="/encuestas/:id" element={<EncuestaDetalle />} />
        <Route path="*" element={<h1>404 - Page not found</h1>}/>
      </Routes>
    </Router>
    // </BrowserRouter>
  )
}