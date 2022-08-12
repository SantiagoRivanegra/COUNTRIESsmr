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
      const res = await axios(`http://localhost:3001/countries/name/${name}`)
      return dispatch({
        type: 'GET_COUNTRY_BY_NAME',
        payload: res.data
      })
    } catch (error) {
      alert("El pais ingresado:  '" + name + "'  no fue encontrado")
      return dispatch(getCountries())
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

export function getCountriesByContinent(continent) {
  return async (dispatch) => {
    const res = await axios(`http://localhost:3001/countries/all/continent/${continent}`)
    return dispatch({
      type: 'GET_COUNTRIES_BY_CONTINENT',
      payload: res.data
    })
  }
}

export function filterCountryByActivity(activity) {
  return async (dispatch) => {
    const res = await axios(`http://localhost:3001/countries/activity/${activity}`)
    return dispatch({
      type: 'GET_COUNTRIES_BY_ACTIVITY',
      payload: res.data
    })
  }
}

export function amountOfPopulation(population) {
  return async (dispatch) => {
    try {
      const res = await axios(`http://localhost:3001/countries/all/population/${population}`)
      return dispatch({
        type: 'AMOUNT_OF_POPULATION',
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }

  }
}

export function orderByAlpha(order){
  console.log(order)
  return{
    type: 'ORDER_COUNTRY_BY_ALPHA',
    payload: order
  }
}

export function orderByPopulation(order){
  console.log(order)
  return{
    type: 'ORDER_COUNTRY_BY_POPULATION',
    payload: order
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

export function getActivityDetail(id){
  return async (dispatch) => {
    const res = await axios(`http://localhost:3001/activities/id/${id}`)
    return dispatch({
      type: 'GET_ACTIVITY_DETAIL',
      payload: res.data
    })
  }
}

export function getActivityByName(name) {
  return async (dispatch) => {
    const res = await axios(`http:/localhost:3001/activities/name/${name}`)
    return dispatch({
      type: 'GET_ACTIVITY_BY_NAME',
      payload: res.data
    })
  }
}

export function getActivityByDuration(duration) {
  return async (dispatch) => {
    const res = await axios(`http://localhost:3001/activities/duration/${duration}`)
    return dispatch({
      type: 'GET_ACTIVITY_BY_DURATION',
      payload: res.data
    })
  }
}

export function getActivityByDifficulty(difficulty) {
  return async (dispatch) => {
    const res = await axios(`http://localhost:3001/activities/difficulty/${difficulty}`)
    return dispatch({
      type: 'GET_ACTIVITY_BY_DIFFICULTY',
      payload: res.data
    })
  }
}

export function getActivityBySeason(season) {
  return async (dispatch) => {
    const res = await axios(`http://localhost:3001/activities/season/${season}`)
    return dispatch({
      type: 'GET_ACTIVITY_BY_SEASON',
      payload: res.data
    })
  }
}

export function getActivityByCountries(countries) {
  return async (dispatch) => {
    const res = await axios(`http://localhost:3001/activities/countries/${countries}`)
    return dispatch({
      type: 'GET_ACTIVITY_BY_COUNTRIES',
      payload: res.data
    })
  }
}

export function changeLanguage(){
	return {
		type: 'CHANGE_LANGUAGE'
	}
}