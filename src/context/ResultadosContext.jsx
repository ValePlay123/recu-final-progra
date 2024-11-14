import { createContext, useState, useContext } from 'react'

const ResultadosContext = createContext()

export function ResultadosProvider({ children }) {
  const [resultados, setResultados] = useState({})

  const actualizarResultado = (idEncuesta, opcionSeleccionada) => {
    setResultados(prevResultados => ({
      ...prevResultados,
      [idEncuesta]: {
        ...prevResultados[idEncuesta],
        [opcionSeleccionada]: (prevResultados[idEncuesta]?.[opcionSeleccionada] || 0) + 1
      }
    }))
  }

  return (
    <ResultadosContext.Provider value={{ resultados, actualizarResultado }}>
      {children}
    </ResultadosContext.Provider>
  )
}

export const useResultados = () => useContext(ResultadosContext)


