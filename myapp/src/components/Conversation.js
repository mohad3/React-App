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
          <div className='inf1'>
            <span>
              {this.props.name}
            </span>
          </div>
          <div className='inf2'>
            <div className='inf3'>
              <span>
                {this.props.unreadmessage}
              </span>
            </div>
            <span>
              {this.props.date}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
