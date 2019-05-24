
import React from 'react'

export default class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      myId: window.localStorage.getItem('id'),
      messages: []
    }
  }
  render () {
    console.log('111111', this.props.messages)
    return (
      <div style={{ overflowY: 'scroll' }}>
        <div className='screen'>
          {this.props.messages.map((item, index) => {
            if (item.sender.id == this.state.myId) {
              return (
                <div className='sender'>
                  <span className='message'>{item.text}</span>
                </div>
              )
            } else {
              return (
                <div className='receiver'>
                  <span className='message'>{item.text}</span>
                </div>

              )
            }
          }

          )

          }
          {/* <div className='receiver'>
          <span className = 'message'>salammm</span>
        </div> */}

          {/* <div className='sender'>
          <span className = 'message'>{this.props.newMessage}</span>
        </div>  */}
        </div>
      </div>

    )
  }
}

// import React from 'react'

// export default class ChatScreen extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       messages: [
//         {
//           id: 1,
//           message: 'salam'
//         },
//         {
//           id: 2,
//           message: 'salam'
//         },
//         {
//           id: 1,
//           message: 'khoobi?'
//         }
//       ]
//     }
//   }
//   render () {
//     return (
//       <div className='screen'>
//         {this.state.messages.map((item, index) => {
//           if (item.id === 1) {
//             return (
//               <div className='sender'>
//                 <span className='message'>{item.message}</span>
//               </div>
//             )
//           } else {
//             return (
//               <div className='receiver'>
//                 <span className='message'>{item.message}</span>
//               </div>
//             )
//           }
//         }

//         )

//         }
//         {/* <div className='receiver'>
//           <span className = 'message'>salammm</span>
//         </div>
//         <div className='sender'>
//           <span className = 'message'>salammm!!!!</span>
//         </div> */}
//       </div>
//     )
//   }
// }
