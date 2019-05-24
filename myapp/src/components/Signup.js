import React from 'react'
import '../App.js'
import signup from '../image/signup.png'
import validate from '../validation/ValidateFunction'
import axios from 'axios'
class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      retypepassword: '',
      clicked: false,
      error: {
        email: null,
        password: null,
        retypepassword: null
      }
    }
  }

  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }
  handleClick () {
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    var retypepasswordError = validate('password', this.state.password)
    var error = {}
    error.email = emailError
    error.password = passwordError
    error.reTypePassword = retypepasswordError
    this.setState({ error })
    this.setState({ ...this.state, error: { ...this.state.error, email: emailError, password: passwordError, reTypePassword: passwordError } })
    console.log('states:::', this.state)
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('https://api.paywith.click/auth/signup/', data)
      .then(function (response) {
        console.log('response::::', response)
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('id', response.data.id)
      })
      .catch(function (error) {
        console.log('error::::', error)
      })
  }
  render () {
    return (
      <div class='bgsignup'>
        <div class='loginboxsu'>
          <img src={signup} class='user' />
          <h2>Sign Up Here</h2>
          <div>
            {/* <p>firstname</p>
            <input
              type='text'
              name=''
              placeholder='Enter Your name'
            />
            <p>ID</p>
            <input
              type='text'
              name=''
              placeholder='choose an ID'
            /> */}
            <p>Email</p>
            <input
              type='text'
              name='email'
              placeholder='Enter Your Email'
              onChange={(e) => this.handleChange(e)}
            />
            { this.state.error.email !== null &&
            <p style={{ color: 'red' }}>{this.state.error.email}</p>
            }
            <p>Password</p>
            <input
              type='password'
              name='password'
              placeholder='********'
              onChange={(e) => this.handleChange(e)}
            />
            { this.state.error.password !== null &&
            <p style={{ color: 'red' }}>{this.state.error.password}</p>
            }
            <p>Retype password</p>
            <input
              type='password'
              name='retypepassword'
              placeholder='********'
              onChange={(e) => this.handleChange(e)}
            />
            { this.state.password !== this.state.reTypePassword && this.state.error.password !== null &&
            <p style={{ color: 'red' }}>Your password not match</p>
            }
            <input
              type='submit'
              name=''
              value='Sign Up'
              onClick={() => this.handleClick()}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
