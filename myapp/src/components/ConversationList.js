import React from 'react'
import Conversation from './Conversation'
export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [
        {
          firstname: 'zahra',
          date: '14 may',
          unreadmessage: '5'

        }, {
          firstname: 'hassan',
          date: '20 may',
          unreadmessage: '10'
        }, {
          firstname: 'hosein',
          date: '12 june',
          unreadmessage: '20'
        }, {
          firstname: 'ali',
          date: '1 february',
          unreadmessage: '1'
        }, {
          firstname: 'honie',
          date: '3 july',
          unreadmessage: '3'

        }, {
          firstname: 'sahar',
          date: '6 october',
          unreadmessage: '1'
        }, {
          firstname: 'maryam',
          date: '15 march',
          unreadmessage: '6'
        }, {
          firstname: 'saeed',
          date: '29 june',
          unreadmessage: '7'
        }, {
          firstname: 'mom',
          date: '29 june',
          unreadmessage: '1'

        }, {
          firstname: 'dad',
          date: '29 june',
          unreadmessage: '1'
        }, {
          firstname: 'atena',
          date: '15 november',
          unreadmessage: '1'
        }, {
          firstname: 'fateme',
          date: '22 april',
          unreadmessage: '10'
        }, {
          firstname: 'arefe',
          date: '11 august',
          unreadmessage: '5'
        }
      ]
    }
  }

  render () {
    return (
      <div className='d1'>
        { this.state.conversationList.map((conversation, index) => {
          return (
            <Conversation
              key={index}
              name={conversation.firstname}
              date={conversation.date}
              unreadmessage={conversation.unreadmessage}
            />
          )
        }
        )

        }
      </div>
    )
  }
}
