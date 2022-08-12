import React, {useEffect} from "react"
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { getActivityDetail} from "../../../redux/actions"

import s from './ActivityDetail.module.css'

function ActivityDetail() {
  const dispatch = useDispatch()
  const spanishLang = useSelector(state => state.spanishLang);

  //Traigo el detalle del pais solicitado por parametro
  const idActivity = useSelector(state => state.activitiesID)
  
  //Obtengo el ID pasado por parametro
    const { id }  = useParams()
  
  //Cada vez que se ejecuta este componente trae el pais solicitado por parametro
    useEffect(() => {
      dispatch(getActivityDetail(id))
    },[dispatch, id])


  return(
    <div className={s.container}>
      <div>
      {
        <div>
          <h1>{idActivity.name}</h1>
          <h1>{idActivity.duration}</h1>
          <h1>{idActivity.difficulty}</h1>
        </div>
            }
      </div>
      <Link to='/activities'>
        <button>{spanishLang ? "Ir a todas las actividades" : "Go to activities"}
        </button>
      </Link>
    </div> 
  )

}

export default ActivityDetail