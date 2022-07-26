import React, { useState, useEffect } from "react";
import { getCountries } from '../../../redux/actions'
import { useDispatch, useSelector } from "react-redux"

import Paged from '../../paged/Paged'
import SearchBar from '../../searchBar/SearchBar'
import Card from '../Card/Card'

function Countries(){
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

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
  }, [dispatch])
  
  return(
    <div>
      <div>
        {/* Barra de Busqueda */}  
        {/* <SearchBar />  */}

        {/* Paginado */} 
        <Paged 
          countriesPerPage = {countriesPerPage}
          countries = {countries.length}
          paged = {paged}
        />      
      </div>
      <div>  
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