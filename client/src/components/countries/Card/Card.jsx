import React from 'react'
import s from './Card.module.css'
import {Link} from 'react-router-dom'

//Card de cada Pais
export default function Card({flag, name, continent, id}){
  return(
    <div className={s.containerCard}>
      <img className={s.img} src={flag} alt={name}/>
      <h4 className={s.name}>{name}</h4>
      <h4 className={s.continent}>{continent}</h4>
      <Link to={`/countries/${id}/detail`}>
        <button className={s.butDetail}>Detalle Pais</button>
      </Link>
    </div>
  )
}