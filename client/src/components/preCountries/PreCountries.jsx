import React from 'react';
import loading from '../../images/loading.gif';
import { Link } from 'react-router-dom'

export default function PreCountries(){
  return(
    <div>
      <img src={ loading } alt='Loading..'/>
      <Link to='/countries/all'>
        <button>Show all countries</button>
      </Link>
    </div>
  )
}
