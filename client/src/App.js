import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import landingPage from './components/landingPage/LandingPage';
import preCountries from './components/preCountries/PreCountries';
import countries from './components/countries/Home/Countries';
// import countryByName from './components/countries/CountryByName/CountryByName';
// import countriesByContinent from './components/countries/CountriesByContinent/CountriesByContinents'
import countryDetail from './components/countries/CountryDetail/CountryDetails'

import allActivities from './components/activities/AllActivities/AllActivities'
import createActivity from './components/activities/CreateActivity/CreateActivity'
import activityDetail from './components/activities/ActivityDetail/ActivityDetail'


import pageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {landingPage}/>
          <Route exact path = '/countries' component = {preCountries}/>
          <Route exact path = '/countries/all' component = {countries}/>
          <Route exact path = '/countries/:id/detail' component = {countryDetail}/>
          {/* <Route exact path = '/countries/:name' component = {countryByName}/>
          <Route exact path = '/countries/:continent' component = {countriesByContinent}/> */}

          <Route exact path = '/activities' component = {allActivities}/>
          <Route exact path = '/activities/create' component = {createActivity}/>
          <Route exact path = '/activities/:id' component = {activityDetail}/>

          <Route path = '*' component = {pageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
