import React from 'react'
import ChatScreenContainer from '../container/ChatScreenContainer'
import FooterContainer from '../container/FooterContainer'
import HeaderContainer from '../container/HeaderContainer'

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
        <HeaderContainer />

        <ChatScreenContainer newMessage={this.state.newMessage} />

        <FooterContainer getNewMessage={(newMessage) => this.getNewMessage(newMessage)} />
      </div>
    )
  }
}
