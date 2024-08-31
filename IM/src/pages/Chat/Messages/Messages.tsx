import Message from './Message'
import { MessageContent, MessagesProps } from '../type'
import './Messages.css'

const Messages= ({messages, user}:MessagesProps) => {

  return (
    <div className='messagesWrapper'>
      <div className='messageContainer'>
          {messages.map((message : MessageContent, i:any) => (
              <div key={i}>
                  <Message message={message} user={user} />
              </div>
          ))}
      </div>
    </div>

  )
}

export default Messages