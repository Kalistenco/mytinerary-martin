import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './components/Home'
import Cities from './components/Cities'
import LogIn from './components/LogIn'
import CreateAccount from './components/CreateAccount'
import Mytinerary from './components/Mytinerary'
import NavBar from './components/NavBar'
import Container from 'react-bootstrap/Container'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cities" component={Cities} />
            <Route path="/login" component={LogIn} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/mytinerary" component={Mytinerary} />
          </Switch>
        </Container>
      </Router>
    )
  };
}
