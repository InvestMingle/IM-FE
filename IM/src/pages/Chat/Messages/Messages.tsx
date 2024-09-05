import Message from './Message'
import { MessageContent, MessagesProps } from '../type'

const Messages= ({messages, user}:MessagesProps) => {

  return (
    <div className='grow flex flex-col-reverse overflow-y-auto mb-12 pb-16 box-border'>
      <div className='flex flex-col p-2'>
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