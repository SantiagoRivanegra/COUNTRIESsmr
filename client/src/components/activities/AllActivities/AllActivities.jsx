import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllActivities, getActivityByName, getActivityByDuration, getActivityByDifficulty, getActivityBySeason, getActivityByCountries, changeLanguage } from '../../../redux/actions'
// import NavBar from '../../navBar/NavBarActivity'
import CardActivity from '../CardActivity/CardActivity'

import s from './AllActivities.module.css'

function AllActivities() {

  const dispatch = useDispatch()
  const allActivities = useSelector(state => state.allActivities)
  const spanishLang = useSelector(state => state.spanishLang);

  useEffect(() =>{
    dispatch(getAllActivities())
  }, [dispatch])

  function handleClick(e){
		e.preventDefault();
		dispatch(changeLanguage())
	}

  function filterByName(e){
    dispatch(getActivityByName(e.target.value))
  }

  function filetrByDifficulty(e){
    dispatch(getActivityByDifficulty(e.target.value))
  }

  function filterByDuration(e){
    dispatch(getActivityByDuration(e.target.value))
  }

  function filterBySeason(e){
    dispatch(getActivityBySeason(e.target.value))
  }

  function filterByCountries(e){
    dispatch(getActivityByCountries(e.target.value))
  }

  return(
    <div className={s.container}>
      <header>
      <div className={s.containerFilters}>
      <div className={s.selects}>

        <select onChange={e => filterByName(e)}>
        <option>{spanishLang ? "Todos" : "All"}</option>
        {
          allActivities && allActivities.map(a => {
            return(
            <option key={'nameFilter' + a.id} value={a.name}>{a.name}</option>
            )
          })
        }
        </select>

        <select onChange={e => filetrByDifficulty(e)}>
          <option>{spanishLang ? "dificultad" : "Difficulty"}</option>
          <option value='1'>1</option>
          <option value='2'>2</option>        
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        <select onChange={e => filterByDuration(e)}>
          <option value='all'>{spanishLang ? "duracion" : "Duration"}</option>
        {
          allActivities && allActivities.map(a => {
            return(
            <option key={'durationFilter' + a.id} value={a.duration}>{a.duration}</option>
            )
          })
        }
        </select>

        <select onChange={e => filterBySeason(e)}>
          <option value='all'>{spanishLang ? "temporada" : "Season"}</option>
        {
          allActivities && allActivities.map(a => {
            return(
            <option key={'seasonFilter' + a.id} value={a.season}>{a.season}</option>
            )
          })
        }
        </select>

        <select onChange={e => filterByCountries(e)}>
          <option value='all'>{spanishLang ? "paises" : "countries"}</option>
        {/* {
          allActivities && allActivities.map(a => {
            return(
            <option key={'countriesFilter' + a.id} value={a.countries}>{a.countries}</option>
            )
          })
        } */}
        </select>
      </div>

      
      <button id={s.buttonLang} value={spanishLang} onClick={handleClick}>
					{spanishLang ? 'EN' : 'ES'}
				</button>
    </div>
      </header>
      <span>
        <Link to='/countries/all'>
          <button>Back to the All Countries
          </button>
        </Link>      
        <Link to='/activities/create'>
          <button>GO to Create activities
          </button>
        </Link> 
      </span>
      {/* <NavBar /> */}
        {
          allActivities && allActivities.map(a=>{
            return(
              <CardActivity key={a.id} id={a.id} name={a.name} duration={a.duration} difficulty={a.difficulty} season={a.season} countries={a.countries.map(c=>c.nameCommon+', ')}/>
            )            
          })
        }
    </div>
  )

}

export default AllActivities