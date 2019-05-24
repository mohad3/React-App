import React from 'react'
// import profile2 from '../image/profile2.png'
class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <img src={this.props.avatar} style={{ width: '30px', margin: '0 5px' }} />
        <h2>
          {this.props.user}
        </h2>
      </div>
    )
  }
}

export default Header
