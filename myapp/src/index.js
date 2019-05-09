import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import Signup from './Signup';
import * as serviceWorker from './serviceWorker'
function Welcome (props) {
  console.log('props:::::::', props)
  return (
    <div>
      <h1>salam Mohadese {props.firstname + ' ' + props.lastname}</h1>
      <h1>salam Mohadese {props.firstname + ' ' + props.lastname}</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
// name='Mohadese'
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
