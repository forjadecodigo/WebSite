import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Contact from './views/contact'
import Nosotros from './views/nosotros'
import Portafolio from './views/portafolio'
import Servicios from './views/servicios'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contacto" />
        <Route component={Nosotros} exact path="/nosotros" />
        <Route component={Portafolio} exact path="/portafolio" />
        <Route component={Servicios} exact path="/servicios" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
