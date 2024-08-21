import Message from './Message'
import { MessagesProps } from '../type'
import './Messages.css'

const Messages= ({messages, user}:MessagesProps) => {

  return (
    <div className='messagesWrapper'>
      <div className='messageContainer'>
          {messages.map((msg, i) => (
              <div key={i}>
                  <Message writer={msg.writer} contents={msg.text} user={user} />
              </div>
          ))}
      </div>
    </div>

  )
}

export default Messages