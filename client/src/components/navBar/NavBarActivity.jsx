import React from "react";
import { changeLanguage} from "../../redux/actions";
import { Link } from "react-router-dom";
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
        <label>{spanishLang ? "Nombre de la Actividad" : "Name of Activity"}</label>
        <select>
        <option value='All'>{spanishLang ? "Todas" : "All"}</option>
        </select>

        <label>{spanishLang ? "Dificultad" : "Difficulty"}</label>
        <select>
        <option value='All'>{spanishLang ? "Ordenar" : "Order"}</option>
        </select>

        <label>{spanishLang ? "Duracion" : "Duration"}</label>
        <select>
        <option value='All'>{spanishLang ? "Actividad" : "Activity"}</option>
        </select>

        <label>{spanishLang ? "Estacion" : "Season"}</label>
        <select>
        <option value='All'>{spanishLang ? "Pobalcion" : "Population"}</option>
        </select>

        <label>{spanishLang ? "Paises" : "Countries"}</label>
        <select>
        <option value='All'>{spanishLang ? "Pobalcion" : "Population"}</option>
        </select>
      </div>

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

      <div className={s.divButtons}>
      <button>A-Z</button>
      <label>{spanishLang ? "Orden" : "Order"}</label>
      <button>Z-A</button>
      <button>-</button>
      <label>{spanishLang ? "Duracion" : "Duration"}</label>
      <button>+</button>
      <button>-</button>
      <label>{spanishLang ? "Dificultad" : "Difficulty"}</label>
      <button>+</button>
      </div>

      
      <button id={s.buttonLang} value={spanishLang} onClick={handleClick}>
					{spanishLang ? 'EN' : 'ES'}
				</button>
    </div>
  )
}

export default NavBarActivity