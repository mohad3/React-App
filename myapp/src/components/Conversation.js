import React from 'react'
import profile from '../image/profile.png'
export default class Conversation extends React.Component {
  render () {
    return (
      <div className='conv'>
        <div className='profileContainer' >
          <img src={profile} style={{ width: '30px' }} />
        </div>
        <div className='contentContainer'>
          <div className='inf'>
            <span>
              {this.props.name}
            </span>
            <span>2/3</span>
          </div>
          <div className='inf'>
            <span>
              {this.props.latestMessage}
            </span>
            <span>
              {this.props.date}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
