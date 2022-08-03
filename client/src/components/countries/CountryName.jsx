import React, { useEffect } from 'react';
import { getCountryByNameOrContienent } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

function CountryName(name){

  const dispatch = useDispatch()
  const country = useSelector(state => state.country)

  useEffect(() => {
    dispatch(getCountryByNameOrContienent(name))
  }, [dispatch])

  return(
    <div>
        {
    country ? country.map(c =>{
        return(
              <div key={c.id}>
              <h3>{c.nameCommon}</h3>
              <img src={c.flag} alt={c.nameCommon}/>
            </div>
        )
    }) : <div>hola</div>
  } 
    </div>
  )
}

export default CountryName;