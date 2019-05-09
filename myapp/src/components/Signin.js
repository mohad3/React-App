
import React from 'react'
import '../App.js'
class Signin extends React.Component {
  render () {
    return (

      <div class='loginbox'>
        <img src='https://cdn0.iconfinder.com/data/icons/user-collection-4/512/selected_user-512.png' class='user' />
        <h2>Log In Here</h2>
        <div>
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
            name='' value='Sign In'
          />
          <a
            href='https://google.com'
          >
          Forget Password
          </a>
        </div>
      </div>

    )
  }
}

export default Signin
