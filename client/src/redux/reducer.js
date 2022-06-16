const initialState={
  countries: [],
  allCountries: [],
  activities: [],
  allActivities: [],
}

export default function reducer(state = initialState, {type, payload}){
  switch(type){

    /* Get all Countries */
    case 'GET_COUNTRIES':
    return{
      ...state,
      countries: payload,
      allCountries: payload
    }

    default: return state
  }
}