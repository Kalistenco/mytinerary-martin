import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Home'
import Cities from './Cities'
import LogIn from './LogIn'
import CreateAccount from './CreateAccount'
import Mytinerary from './Mytinerary'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/login" component={LogIn} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/mytinerary" component={Mytinerary} />
        </Switch>
      </Router>
    )
  };
}
