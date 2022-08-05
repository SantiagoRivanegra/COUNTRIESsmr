import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getAllActivities } from '../../../redux/actions'
import NavBar from '../../navBar/NavBarActivity'
import CardActivity from '../CardActivity/CardActivity'

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
      {/* <span>
      <Link to='/countries/all'>
                  <button>Back to the All Countries
                  </button>
                  </Link>      
                  <Link to='/activities/create'>
                  <button>GO to Create activities
                  </button>
                  </Link> 
                  </span> */}
        {
          allActivities && allActivities.map(a=>{
            return(
              <CardActivity key={a.id} name={a.name} duration={a.duration} difficulty={a.difficulty} season={a.season} countries={a.countries.map(c=>c.nameCommon+', ')}/>
            )            
          })
        }
    </div>
  )

}

export default AllActivities