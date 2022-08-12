import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from '../../redux/actions'

import s from './SearchBar.module.css'

function SearchBar() {
  const spanishLang = useSelector(state => state.spanishLang)
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    if(name !== ""){
      dispatch(getCountryByName(name))
      setName("")
    } else {
      alert('No estas buscando nada, ingrese un pais')
    }
  }

  return(
    <div>
      <input className={s.searchBar}
        type = 'text'
        value = {name}
        placeholder = {spanishLang ? "Buscar..." : "Search..."}
        onChange={(e) => handleInputChange(e)}
      />
      <button className={s.butSearch} type = 'submit' onClick = {(e) => handleSubmit(e)}>Buscar</button>
    </div>
  )
}

export default SearchBar