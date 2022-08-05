import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CardActivity({id, name, duration, difficulty, season, countries}) {

  const spanishLang = useSelector(state => state.spanishLang);

  return(
    <div key={id}>
      <h3>{spanishLang ? "Tipo: " : "Tipe: "}{name}</h3>
      <span>{spanishLang ? "Duracion: " : "Duration: "}{duration}</span>
      <span>{spanishLang ? "Dificultad: " : "Difficulty: "}{difficulty}</span>
      <span>{spanishLang ? "Temporada: " : "Season: "}{season}</span>
      <span>{spanishLang ? "Paises: " : "Countries: "}{countries}</span>
      <span><Link to={`activities/${id}`}><button>{spanishLang ? "Ver detalles" : "Show details"}</button></Link></span>
      <br />
      <hr />
    </div>
  )
}

export default CardActivity