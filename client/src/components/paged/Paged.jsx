import React from "react";
import './Paged.css'

export default function Paged({countriesPerPage, countries, paged}){
  const pageNumber = []

  for (let i = 0; i <= Math.ceil(countries/countriesPerPage)-1; i++) {
    pageNumber.push(i+1)
  }

  return(
    <nav className="containerPaged">
      <ul className="paged">
        {
          pageNumber && pageNumber.map(number => (
              <button className="butNumber" onClick={() => paged(number)}>{number}</button>
          ))
        }
      </ul>
    </nav>
  )
}