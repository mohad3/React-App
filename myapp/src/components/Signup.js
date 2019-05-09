import React from 'react'
import '../App.js'
class Signup extends React.Component {
  render () {
    return (

      <div class='loginboxsu'>
        <img src='https://cdn0.iconfinder.com/data/icons/user-collection-4/512/add_user-512.png' class='user' />
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
