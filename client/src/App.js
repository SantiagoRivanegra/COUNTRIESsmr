import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import landingPage from './components/landingPage/LandingPage';
import countries from './components/countries/Countries';
import pageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {landingPage}/>
          <Route exact path = '/countries' component = {countries}/>

          <Route path = '*' component = {pageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
