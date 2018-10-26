import React, { Component } from 'react'
// import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css'
import './scss/style.css'
// Containers
import { DefaultLayout } from './containers'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' name='Home' component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
