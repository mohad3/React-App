import { connect } from 'react-redux'
import Conversation from '../components/Conversation'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const ConversationContainer = connect(
  mapDispatchToProps
)(Conversation)

export default ConversationContainer
