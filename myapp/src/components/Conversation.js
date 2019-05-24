import React from 'react'
// import profile from '../image/profile.png'
import axios from 'axios'
import { saveMessages } from '../action/Conversation'
export default class Conversation extends React.Component {
  handleChat () {
    console.log('id::::::', this.props.id)
    console.log('token::::::', this.props.token)
    let date = Math.ceil(new Date().getTime() / 1000)
    let fdata = new FormData()
    fdata.append('token', this.props.token)
    fdata.append('conversation_id', this.props.chatid)
    fdata.append('date', date)
    fdata.append('size', 10)
    // console.log('search', this.state.saveConversationList)
    // this.setState({ saveConversationList: event.target.value })
    axios.post('https://api.paywith.click/conversation/details/', fdata)
      .then((response) => {
        console.log('response::::', response)
        this.props.dispatch(saveMessages(response.data.data.messages, this.props.name, this.props.avatar, this.props.chatid))
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }
  render () {
    return (
      <div className='conv' onClick={() => this.handleChat()}>
        <div className='profileContainer' >
          <img src={this.props.avatar} style={{ width: '30px' }} />
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
            <span style={{ fontSize: '10px', color: '#999' }}>{this.props.date.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
