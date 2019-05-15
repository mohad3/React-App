import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Massenger from './components/Massenger'
// import logo from './logo.svg'
import './App.css'
class App extends React.Component {
  render () {
  // javascripts
    return (
      <Router>
        <Route exact path='/' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/massenger' component={Massenger} />

      </Router>
    )
  }
}

export default App
