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
     
    case 'GET_COUNTRY_BY_NAME':
      const filterName = payload ? payload : alert('Este pais ' + payload + ' no existe')
    return {
      ...state,
      countries: filterName
    }  

    case 'GET_COUNTRIES_BY_CONTINENT':
      return {
          ...state,
        countries: payload
      }

    case 'GET_COUNTRIES_BY_ACTIVITY':
      return {
          ...state,
        countries: payload
      }

    case 'AMOUNT_OF_POPULATION':
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

      case 'ORDER_COUNTRY_BY_POPULATION':
        let sortedPopulation =  state.countries;
  
        if(payload === 'lower' ){
          sortedPopulation = state.countries.sort(function(a,b){
              if(a.population > b.population){
                return 1
              }
              if(a.population < b.population){
                return -1
              }
              return 0
            })
        } else if(payload === 'higher'){
          sortedPopulation = state.countries.sort(function(a,b){
              if(a.population > b.population){
                return -1
              }
              if(a.population < b.population){
                return 1
              }
              return 0
        })
      }
        return {
          ...state,
          countries: sortedPopulation
        }

    case 'GET_ACTIVITY_DETAIL':
      return {
      ...state,
      activitiesID: payload
    }

    case 'GET_ACTIVITY_BY_NAME':
      return {
          ...state,
          activities: payload
      }

    case 'GET_ACTIVITY_BY_DURATION':
      return {
        ...state,
        activities: payload
    }
    
    case 'GET_ACTIVITY_BY_DIFFICULTY':
      return {
          ...state,
          activities: payload
      }
    
    case 'GET_ACTIVITY_BY_SEASON':
      return {
          ...state,
          activities: payload
      }
      
    case 'GET_ACTIVITY_BY_COUNTRIES':
      return {
          ...state,
          activities: payload
      }      

    default: return state
  }
}