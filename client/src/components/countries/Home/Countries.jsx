import React, { useState, useEffect } from "react";
import { getCountries } from '../../../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'

//import NavBar from '../../navBar/NavBarCountry'
import Paged from '../../paged/Paged'
import SearchBar from '../../searchBar/SearchBar'
import Card from '../CardCountry/CardCountry'
import { getCountriesByContinent, orderByAlpha, changeLanguage, orderByPopulation, filterCountryByActivity, getAllActivities, amountOfPopulation } from '../../../redux/actions'

import s from './Countries.module.css'

function Countries(){
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const activities = useSelector(state => state.allActivities)
  const spanishLang = useSelector(state => state.spanishLang);

  //Pagination
  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPage] = useState(10)
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry)

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
  useEffect(() => {
    dispatch(getCountries())
    dispatch(getAllActivities())
  }, [dispatch])
  
  function handleClick(e){
		e.preventDefault();
		dispatch(changeLanguage())
	}

  function changeContinent(e){
    dispatch(getCountriesByContinent(e.target.value))
    setCurrentPage(1)
  }

  function orderCountriesByAlpha(e){
    e.preventDefault()
    dispatch(orderByAlpha(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }

  function filterByActivities(e){
    dispatch(filterCountryByActivity(e.target.value))
    setCurrentPage(1)
  }

  function orderCountriesByPopulation(e){
    e.preventDefault()
    dispatch(orderByPopulation(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }

  function handleFilterHabitantes(e){
    dispatch(amountOfPopulation(e.target.value))
    setCurrentPage(1)
  }

  return(
    <div className={s.container}>
      {/* <NavBar /> */}
      <header>
      <div className={s.containerFilters}>
      <div className={s.selects}>
        <select onChange={e => changeContinent(e)}>
        <option value='All'>{spanishLang ? "Todos" : "All"}</option>
        <option value='Africa'>{spanishLang ? "Africa" : "Africa"}</option>
        <option value='Antarctica'>{spanishLang ? "Antártida" : "Antarctica"}</option>
        <option value='North America'>{spanishLang ? "America del Norte" : "North America"}</option>
        <option value='South America'>{spanishLang ? "America del Sur" : "South America"}</option>
        <option value='Asia'>{spanishLang ? "Asia" : "Asia"}</option>
        <option value='Europe'>{spanishLang ? "Europa" : "Europe"}</option>
        <option value='Oceania'>{spanishLang ? "Oceania" : "Oceania"}</option>
        </select>

        <select onChange={e => orderCountriesByAlpha(e)}>
          <option>{spanishLang ? "Ordenar Alfabeticamente" : "Order Alphabetically"}</option>
          <option value='a-z'>{spanishLang ? "A-Z" : "A-Z"}</option>
          <option value='z-a'>{spanishLang ? "Z-A" : "Z-A"}</option>
        </select>

        <select onChange={e => filterByActivities(e)}>
          <option key={'activityFilter'} value='all'>{spanishLang ? "Todas los Paises" : "All Countries"}</option>
        {
          activities && activities.map(a => {
            return(
            <option key={'activityFilter' + a.id} value={a.name}>{a.name}</option>
            )
          })
        }
        </select>

        <select onChange={e => orderCountriesByPopulation(e)}>
        <option>{spanishLang ? "Cantidad de Poblacion" : "Amount of Population"}</option>
        <option value='higher'>{spanishLang ? "Mayor Poblacion" : "Higher Population"}</option>
        <option value='lower'>{spanishLang ? "Menor Poblacion" : "Lower Population"}</option>
        </select>

        <input placeholder={spanishLang ? "Pobalcion" : "Population"}/>
        <label>Filtro Habitantes: </label>
      <button onClick={e => handleFilterHabitantes(e)}>FiltroNuevo
      </button>
      </div>

      
      <button id={s.buttonLang} value={spanishLang} onClick={handleClick}>
					{spanishLang ? 'EN' : 'ES'}
				</button>
    </div>
      </header>
      <div>
        {/* Barra de Busqueda */}  
        <SearchBar /> 

        {/* Paginado */} 
        <Paged 
          countriesPerPage = {countriesPerPage}
          countries = {countries.length}
          paged = {paged}
        />
        <Link to='/activities'>
        <button>GO to activities
        </button>
        </Link>      
      </div>
      <div className = {s.containerCountry}>  
        {
          currentCountry ? currentCountry.map(c =>{
            return(
              <Card flag={c.flag} name={c.nameCommon} continent={c.continent} id={c.id}/>
            )
          }) : <div>hola</div>
        }
      </div>  
  </div>
)
}

export default Countries