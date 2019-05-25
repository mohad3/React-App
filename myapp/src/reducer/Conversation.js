const INIT = {
  newMessage: '',
  messages: [],
  conversationList: [],
  user: '',
  chatid: ''
}
var myID = window.localStorage.getItem('id')
function conversation (state = INIT, action) {
  switch (action.type) {
    case 'SAVE_NEW_MESSAGE':
      return { ...state,
        newMessage: action.payload,
        messages:
        [...state.messages,
          {
            sender: {
              id: myID
            },
            text: action.payload
          }
        ]

      }
    case 'SAVE_CONVERSATION_LIST':
      return {
        ...state,
        conversationList: action.payload
      }
    case 'SAVE_MESSAGES':
      return {
        ...state,
        messages: action.payload,
        user: action.user,
        avatar: action.avatar,
        chatid: action.chatid
      }
    default:
      return state
  }
}

export default conversation
