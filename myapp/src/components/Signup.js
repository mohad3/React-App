import React from 'react'
import '../App.js'
import signup from '../image/signup.png'
class Signup extends React.Component {
  render () {
    return (

      <div class='loginboxsu'>
        <img src={signup} class='user' />
        <h2>Sign Up Here</h2>
        <div>
          <p>firstname</p>
          <input
            type='text'
            name=''
            placeholder='Enter Your firstname'
          />
          <p>lastname</p>
          <input
            type='text'
            name=''
            placeholder='Enter Your lastname'
          />
          <p>ID</p>
          <input
            type='text'
            name=''
            placeholder='choose an ID'
          />
          <p>Email</p>
          <input
            type='text'
            name=''
            placeholder='Enter Your Email'
          />
          <p>Password</p>
          <input
            type='password'
            name=''
            placeholder='********'
          />
          <input
            type='submit'
            name=''
            value='Sign Up'
          />
        </div>
      </div>

    )
  }
}

export default Signup
