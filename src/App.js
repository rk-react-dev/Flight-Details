import React from 'react';
import './App.css';
import FlightDetails from './components/FlightDetails'
import AddFlight from './components/AddFlight'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Flight Details</Link>
            </li>
            <li>
              <Link to="/flightDetails">AddFlight</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/flightDetails">
            <AddFlight />
          </Route>
          <Route path="/">
            <FlightDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
