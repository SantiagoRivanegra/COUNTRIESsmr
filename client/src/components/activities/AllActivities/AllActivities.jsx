import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllActivities } from '../../../redux/actions'

function AllActivities() {

  const dispatch = useDispatch()
  const allActivities = useSelector(state => state.allActivities)

  useEffect(() =>{
    dispatch(getAllActivities())
  }, [dispatch])

  return(
    <div>
        {
          allActivities && allActivities.map(a=>{
            return(
              <div>
                <div>        
                  <Link to='/activities/create'>
                  <button>GO to Create activities
                  </button>
                  </Link> 
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