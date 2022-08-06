import React, {useEffect} from "react"
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { getCountryDetail} from "../../../redux/actions"

import s from './CountryDetail.module.css'

function CountryDetail() {
  const dispatch = useDispatch()
  const spanishLang = useSelector(state => state.spanishLang);

  //Traigo el detalle del pais solicitado por parametro
  const idCountry = useSelector(state => state.countriesID)
  
  //Obtengo el ID pasado por parametro
    const { id }  = useParams()
  
  //Cada vez que se ejecuta este componente trae el pais solicitado por parametro
    useEffect(() => {
      dispatch(getCountryDetail(id))
    },[dispatch, id])

  return(
    <div className={s.container}>
      {
        <div className={s.containerElements}>
          <h1>{idCountry.nameCommon}</h1>
          <img src={idCountry.flag} alt={idCountry.nameCommon} />
          <img className={s.imgCoatOfArmas} src={idCountry.coatOfArms} alt={spanishLang ? "Escudo de Armas: " : "Coat of Arms: "} />
          <h6>{spanishLang ? "Nombre Oficial : " : "Official Name: "} {idCountry.nameOfficial}</h6>
          <h6>{spanishLang ? "Idiomas: " : "Languages: "} {idCountry.languages}</h6>
          <h6>{spanishLang ? "Moneda: " : "Currency: "} {idCountry.currencyName}</h6>
          <h6>{spanishLang ? "Moneda: " : "Currency: "} {idCountry.currencySymbol}</h6>
          <h6>{spanishLang ? "Continente: " : "Continent"} {idCountry.continent}</h6>
          <h6>{spanishLang ? "Región: " : "Región: "} {idCountry.region}</h6>
          <h6>{spanishLang ? "Subregión: " : "Subregión: "} {idCountry.subRegion}</h6>
          <h6>{spanishLang ? "Capital: " : "Capital: "} {idCountry.capital}</h6>
          <h6>{spanishLang ? "Poblacion: " : "Population: "} {idCountry.population} Habitantes</h6>
          <h6>{spanishLang ? "Area: " : "Area: "} {idCountry.area} Km²</h6>
          <h6>{spanishLang ? "Zonas Horarias: " : "Time Zones: "} {idCountry.timeZones}</h6>
        </div>
            }
       <Link to = '/countries/all'>
         <button>Volver</button>
       </Link>        
    </div>    
  )
}

export default CountryDetail

// currencyName: c.currencies ?  Object.keys(c.currencies) : 'No hay currencies',
// currencySymbol: c.currencies ? Object.keys(c.currencies) : 'No hay currencies', //objeto.'nombredelamoneda'.symbol
