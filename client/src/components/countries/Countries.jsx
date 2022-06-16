import React from "react";
import { getCountries } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

function Countries(){
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])
  
  return(
    <div>
  {
    countries ? countries.map(c =>{
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

export default Countries