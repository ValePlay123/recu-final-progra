import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Encuestas() {
  const [encuestas, setEncuestas] = useState([]);

  useEffect(() => {
    // Cargar encuestas desde el archivo JSON
    fetch('/encuestas.json')
      .then(response => response.json())
      .then(data => setEncuestas(data))
      .catch(error => console.error("Error al cargar encuestas:", error));
  }, []);

  return (
    <div>
      <h1>Encuestas</h1>
      <ul>
        {encuestas.map(encuesta => (
          <li key={encuesta.id}>
            <Link to={`/encuestas/${encuesta.id}`}>
              {encuesta.pregunta}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

