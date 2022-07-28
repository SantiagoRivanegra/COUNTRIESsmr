import axios from 'axios'

export function getCountries(){
  return async (dispatch) => {
    try {
      const res = await axios('http://localhost:3001/countries/all')
      return dispatch({
        type: 'GET_COUNTRIES',
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }

  }
}

export function getCountryByName(name){
  return async (dispatch) => {
    try {
      const res = await axios('http://localhost:3001/countries?name='+name)
      return dispatch({
        type: 'GET_COUNTRIES_BY_NAME',
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }

  }
}