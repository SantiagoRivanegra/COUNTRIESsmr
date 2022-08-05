const initialState={
  countries: [],
  allCountries: [],
  countriesID: [],
  activities: [],
  allActivities: [],
  spanishLang: true,
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

    /* Get all Activities */
    case 'GET_ALL_ACTIVITIES':
      return{
        ...state,
        activities: payload,
        allActivities: payload
      }

      /* Change Language */
      case 'CHANGE_LANGUAGE':
        return {
          ...state,
          spanishLang: state.spanishLang === true ? false : true,
        }

        case 'GET_COUNTRY_DETAIL':
          return {
            ...state,
            countriesID: payload
          }

    default: return state
  }
}