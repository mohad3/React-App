import React from 'react'
import Conversation from './Conversation'
export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [
        {
          firstname: 'zahra',
          date: '2/10',
          latestMessage: 'salam'

        }, {
          firstname: 'hassan',
          date: '2/10',
          latestMessage: 'salam'
        }, {
          firstname: 'hosein',
          date: '2/10',
          latestMessage: 'salam'
        }, {
          firstname: 'ali',
          date: '2/10',
          latestMessage: 'salam'
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
              date='3/2'
              latestMessage='salammmm'
            />
          )
        }
        )

        }
      </div>
    )
  }
}
