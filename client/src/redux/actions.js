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

export function getCountryDetail(id){
  return async (dispatch) => {
    const res = await axios(`http://localhost:3001/countries/id/${id}`)
    return dispatch({
      type: 'GET_COUNTRY_DETAIL',
      payload: res.data
    })
  }
}

export function getAllActivities(){
  return async (dispatch) => {
    try {
      const res = await axios('http://localhost:3001/activities')
      return dispatch({
        type: 'GET_ALL_ACTIVITIES',
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function changeLanguage(){
	return {
		type: 'CHANGE_LANGUAGE'
	}
}