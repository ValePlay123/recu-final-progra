import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ResultadosProvider } from './context/ResultadosContext.jsx'


import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResultadosProvider>
    <App/>
    </ResultadosProvider>
  </StrictMode>
)
