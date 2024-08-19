import React, { ChangeEvent } from 'react'
import './input.css'

interface ChatInputProps {
    setMessage : (e:string) => void ,
    sendMessage : (e: React.MouseEvent<HTMLButtonElement>) => void,
    onChange : (e :ChangeEvent<HTMLInputElement>) => void,
    message : string
}

const Input = ({ setMessage,sendMessage, message } : ChatInputProps) => {

  return(
      <form className="form">
        <a href="" className='file'>icon</a>
        <input
          className="input"
          type="text"
          placeholder="Write a Message"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          //enter처리 필요
        />
      <button onClick={sendMessage}>Send</button>
      </form>
  )

}
  
  export default Input;