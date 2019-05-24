import React from 'react'
import send from '../image/send.png'
import { addNewMessage } from '../action/Conversation'
import axios from 'axios'
export default class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      newMessage: '',
      token: window.localStorage.getItem('token')
    }
  }

  onChangeText (e) {
    this.setState({ newMessage: e.target.value })
  }
  handleText () {
    this.props.dispatch(addNewMessage(this.state.newMessage))
    // this.setState({
    //   newMessage: ''
    // })
    console.log('chatid::::::', this.state.newMessages)
    // let date = Math.ceil(new Date().getTime() / 1000)
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.chatid)
    fdata.append('text', this.state.newMessage)
    // console.log('search', this.state.saveConversationList)
    // this.setState({ saveConversationList: event.target.value })
    axios.post('https://api.paywith.click/conversation/create/', fdata)
      .then((response) => {
        console.log('response::::', response)
        this.setState({ newMessage: '' })
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }
  render () {
    return (
      <div className='footer'>
        <input
          placeholder='write a message...'
          value={this.state.newMessage}
          onChange={(e) => this.onChangeText(e)} />
        <img src={send}
          style={{ cursor: 'pointer' }}
          onClick={() => this.handleText()}
        />
      </div>
    )
  }
}
