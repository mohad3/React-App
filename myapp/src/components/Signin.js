
import React from 'react'
import '../App.js'
import signin from '../image/signin.png'
import validate from '../validation/ValidateFunction'
import { Link } from 'react-router-dom'
class Signin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      clicked: false,
      error: {
        email: null,
        password: null
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
    var error = {}
    error.email = emailError
    error.password = passwordError
    this.setState({ error })
    this.setState({ ...this.state, error: { ...this.state.error, email: emailError, password: passwordError } })
  }

  render () {
    return (
      <div class='bgsignin'>

        <div class='loginbox'>
          <img src={signin} class='user' />
          <h2>Log In Here</h2>
          <div>
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
            <input
              type='submit'
              name='' value='Sign In'
              onClick={() => this.handleClick()}
            />
            <Link
              className='submit link'
              to='./signup'
            >
            sign up
            </Link>
            <a
              href='https://google.com'
            >
          Forget Password
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Signin
