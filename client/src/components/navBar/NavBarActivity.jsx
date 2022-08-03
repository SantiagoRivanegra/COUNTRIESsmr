import React, { useState } from "react";
import { changeLanguage} from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import s from './NavBarCountry.module.css'

function NavBarActivity() {
  const dispatch = useDispatch()
  const spanishLang = useSelector(state => state.spanishLang);


	function handleClick(e){
		e.preventDefault();
		dispatch(changeLanguage())
	}

  return(
    <div className={s.container}>
      <div className={s.selects}>
        <select>
        <option value='All'>{spanishLang ? "Todos" : "All"}</option>
        <option value='Africa'>Africa</option>
        <option value='Antarctica'>Antarctica</option>
        <option value='North America'>{spanishLang ? "America del Norte" : "North America"}</option>
        <option value='South America'>{spanishLang ? "America del Sur" : "South America"}</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europa</option>
        <option value='Oceania'>Oceania</option>
        </select>

        <select>
        <option value='All'>{spanishLang ? "Ordenar" : "Order"}</option>
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

export default NavBarActivity