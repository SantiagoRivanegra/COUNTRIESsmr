import React from 'react'

import { Link } from 'react-router-dom'

import s from './CountryDetail.module.css'

function CountryDetail() {

  return(
    <div className={s.container}>
      <Link to='/countries/all'>
                  <button>GO to counires
                  </button>
                  </Link> 
    </div>
  )
}

export default CountryDetail