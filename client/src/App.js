import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import landingPage from './components/landingPage/LandingPage';
import preCountries from './components/preCountries/PreCountries';
import countries from './components/countries/Countries';
import pageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {landingPage}/>
          <Route exact path = '/countries' component = {preCountries}/>
          <Route exact path = '/countries/all' component = {countries}/>
          {/* <Route exact path = '/countries/:name' component = {countryName}/>
          <Route exact path = '/countries/:continent' component = {countinentName}/>
          <Route exact path = '/countries/:name/detail' component = {countryDetail}/>

          <Route exact path = '/activities' component = {activities}/>
          <Route exact path = '/activities/:id' component = {activityDetail}/>
          <Route exact path = '/activities/create' component = {activityCreate}/> */}

          <Route path = '*' component = {pageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
