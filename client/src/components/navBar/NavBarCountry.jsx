import React, { useState } from "react";
import { changeLanguage} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

import { getCountriesByContinent, orderByAlpha } from '../../redux/actions'

import s from './NavBarCountry.module.css'

function NavBarCountry() {
  const dispatch = useDispatch()
  const spanishLang = useSelector(state => state.spanishLang);
  const [order, setOrder] = useState('')


	function handleClick(e){
		e.preventDefault();
		dispatch(changeLanguage())
	}

  function changeContinent(e){
    dispatch(getCountriesByContinent(e.target.value))
  }

  function orderCountriesByAlpha(e){
    e.preventDefault()
    dispatch(orderByAlpha(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }

  return(
    <div className={s.container}>
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

        <select>
          <option value='All'>{spanishLang ? "Actividad" : "Activity"}</option>
        </select>

        <select>
        <option value='All'>{spanishLang ? "Pobalcion" : "Population"}</option>
        </select>

        <input placeholder={spanishLang ? "Pobalcion" : "Population"}/>
      </div>

      
      <button id={s.buttonLang} value={spanishLang} onClick={handleClick}>
					{spanishLang ? 'EN' : 'ES'}
				</button>
    </div>
  )
}

export default NavBarCountry