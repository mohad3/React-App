
import React from 'react'
import ConversationContainer from '../container/ConversationContainer'
// import search from '../image/search.png'
import axios from 'axios'
import { saveConversationList } from '../action/Conversation'
import { Link } from 'react-router-dom'

export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [],
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      suggestedUsers: []
    }
    this.handleRequest = this.handleRequest.bind(this)
  }

  componentDidMount () {
    this.handleRequest()
  }

  handleRequest () {
    const token = window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token
      }
    })
      .then(response => {
        this.props.dispatch(saveConversationList(response.data.data.conversation_details))
      })
      .catch(error => {
        console.log('1111111111', error)
      })
  }
  handleChange (e) {
    // let data = {
    //   token: this.state.token,
    //   query: event.target.value,
    //   size: 4
    // }
    if (e.target.value !== '') {
      let fdata = new FormData()
      fdata.append('token', this.state.token)
      fdata.append('query', e.target.value)
      fdata.append('size', 4)
      // console.log('search', this.state.saveConversationList)
      // this.setState({ saveConversationList: event.target.value })
      axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
        .then((response) => {
          console.log('response::::', response)
          this.setState({ suggestedUsers: response.data.data.users })
        })
        .catch((error) => {
          console.log('error::::', error)
        })
    } else {
      this.setState({ suggestedUsers: [] })
    }
  }
  handleConversation (user) {
    console.log('handle conversation', user)
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('user_id', user.id)
    // console.log('search', this.state.saveConversationList)
    // this.setState({ saveConversationList: event.target.value })
    axios.post('https://api.paywith.click/conversation/', fdata)
      .then((response) => {
        console.log('response::::', response)
      })
      .catch((error) => {
        console.log('error::::', error)
      })
  }

  render () {
    console.log('props:::::', this.state.myId)
    return (
      <div className='d1'>
        <div className='logo'>
          <Link
            className='welcome'
            to='./'
          >
            <h1>
            Welcome
            </h1>
          </Link>
        </div>
        <div className='search'>
          <input
            className='insearch'
            placeholder='serach your contact'
            onChange={(e) => this.handleChange(e)}
          />
          { this.state.suggestedUsers.map((user, index) => {
            return (
              <p key={index} className='suggest' onClick={() => this.handleConversation(user)}>
                {user.email}
              </p>
            )
          })

          }
          {/* <img
            src={search}
            className='inimage'
            onClick={() => this.onClick()}
          /> */}
        </div>
        { this.props.conversationList.map((conversation, index) => {
          return (conversation.users.map((user, idx) => {
            if (user.id !== this.state.myId) {
              return (
                <ConversationContainer
                  key={index}
                  name={user.email}
                  date={conversation.latest_message_date}
                  unreadmessage={conversation.unreadmessage}
                  chatid={conversation.id}
                  token={this.state.token}
                  avatar={user.avatar_url}
                />
              )
            }
          }))
        }
        )

        }
      </div>
    )
  }
}

// import React from 'react'
// import Conversation from './Conversation'
// export default class ConversationList extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       conversationList: [
//         {
//           firstname: 'zahra',
//           date: '14 may',
//           unreadmessage: '5'

//         }, {
//           firstname: 'hassan',
//           date: '20 may',
//           unreadmessage: '10'
//         }, {
//           firstname: 'hosein',
//           date: '12 june',
//           unreadmessage: '20'
//         }, {
//           firstname: 'ali',
//           date: '1 february',
//           unreadmessage: '1'
//         }, {
//           firstname: 'honie',
//           date: '3 july',
//           unreadmessage: '3'

//         }, {
//           firstname: 'sahar',
//           date: '6 october',
//           unreadmessage: '1'
//         }, {
//           firstname: 'maryam',
//           date: '15 march',
//           unreadmessage: '6'
//         }, {
//           firstname: 'saeed',
//           date: '29 june',
//           unreadmessage: '7'
//         }, {
//           firstname: 'mom',
//           date: '29 june',
//           unreadmessage: '1'

//         }, {
//           firstname: 'dad',
//           date: '29 june',
//           unreadmessage: '1'
//         }, {
//           firstname: 'atena',
//           date: '15 november',
//           unreadmessage: '1'
//         }, {
//           firstname: 'fateme',
//           date: '22 april',
//           unreadmessage: '10'
//         }, {
//           firstname: 'arefe',
//           date: '11 august',
//           unreadmessage: '5'
//         }
//       ]
//     }
//   }

//   render () {
//     return (
//       <div className='d1'>
//         <div className='logo'>
//           <h1>Welcome</h1>
//         </div>
//         { this.state.conversationList.map((conversation, index) => {
//           return (
//             <Conversation
//               key={index}
//               name={conversation.firstname}
//               date={conversation.date}
//               unreadmessage={conversation.unreadmessage}
//             />
//           )
//         }
//         )

//         }
//       </div>
//     )
//   }
// }
