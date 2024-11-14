import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useResultados } from '../context/ResultadosContext'

export default function EncuestaDetalle() {
  const { id } = useParams()
  const [encuesta, setEncuesta] = useState(null)
  const { resultados, actualizarResultado } = useResultados()

  useEffect(() => {
    fetch('/encuestas.json')
      .then(response => response.json())
      .then(data => {
        const selectedEncuesta = data.find(e => e.id === parseInt(id))
        setEncuesta(selectedEncuesta)
      })
  }, [id])

  const handleOptionSelect = opcion => {
    actualizarResultado(id, opcion)
  }

  if (!encuesta) return <div>Cargando...</div>

  return (
    <div>
      <h2>{encuesta.pregunta}</h2>
      <ul>
        {encuesta.opciones.map(opcion => (
          <li key={opcion}>
            <button onClick={() => handleOptionSelect(opcion)}>
              {opcion} ({resultados[id]?.[opcion] || 0})
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

