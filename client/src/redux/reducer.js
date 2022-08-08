const initialState={
  countries: [],
  allCountries: [],
  countriesID: [],
  activities: [],
  allActivities: [],
  activitiesID: [],
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

    case 'GET_COUNTRIES_BY_CONTINENT':
      return {
          ...state,
        countries: payload
      }

    case 'ORDER_COUNTRY_BY_ALPHA':
      let sortedAlpha =  state.countries;

      if(payload === 'a-z' ){
        sortedAlpha = state.countries.sort(function(a,b){
            if(a.nameCommon > b.nameCommon){
              return 1
            }
            if(a.nameCommon < b.nameCommon){
              return -1
            }
            return 0
          })
      } else if(payload === 'z-a'){
        sortedAlpha = state.countries.sort(function(a,b){
            if(a.nameCommon > b.nameCommon){
              return -1
            }
            if(a.nameCommon < b.nameCommon){
              return 1
            }
            return 0
      })
    }
      return {
        ...state,
        countries: sortedAlpha
      }

    case 'GET_ACTIVITY_DETAIL':
      return {
      ...state,
      activitiesID: payload
    }

    default: return state
  }
}