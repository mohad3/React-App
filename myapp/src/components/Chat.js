import React from 'react'
import profile2 from '../image/profile2.png'
import ChatScreen from './ChatScreen'
import Footer from './Footer'

export default class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      newMessage: ''
    }
  }

  getNewMessage (newMessage) {
    console.log('Im here:', newMessage)
    this.setState({ newMessage })
  }
  render () {
    console.log('state', this.state.newMessage)
    return (
      <div className='d2'>
        <div className='header'>
          <img src={profile2} style={{ width: '30px', margin: '0 5px' }} />
          <h2> zahra </h2>
        </div>

        <ChatScreen newMessage={this.state.newMessage} />

        <Footer getNewMessage={(newMessage) => this.getNewMessage(newMessage)} />
      </div>
    )
  }
}
