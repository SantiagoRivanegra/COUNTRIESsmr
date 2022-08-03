import React from 'react';

import { useSelector} from "react-redux";

function SearchBar() {

  const spanishLang = useSelector(state => state.spanishLang)
  return(
    <div>
      <input placeholder={spanishLang ? "Buscar" : "Search"}/>
    </div>
  )
}

export default SearchBar