import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllActivities } from '../../../redux/actions'
import NavBar from '../../navBar/NavBarActivity'

import s from './AllActivities.module.css'

function AllActivities() {

  const dispatch = useDispatch()
  const allActivities = useSelector(state => state.allActivities)

  useEffect(() =>{
    dispatch(getAllActivities())
  }, [dispatch])

  return(
    <div className={s.container}>
      <NavBar />
      <Link to='/countries/all'>
                  <button>Back to the All Countries
                  </button>
                  </Link>      
                  <Link to='/activities/create'>
                  <button>GO to Create activities
                  </button>
                  </Link> 
        {
          allActivities && allActivities.map(a=>{
            return(
              <div>
                <div>   

                </div>
                <h3>Nombre: {a.name}</h3>
                <h3>Duration: {a.duration}</h3>
                {/* dentro de la card el boton*/}
                <Link to={`/activities/${a.id}`}>
                  <button> Ver Detalle</button>  
                </Link>

              </div>
            )            
          })
        }
    </div>
  )

}

export default AllActivities