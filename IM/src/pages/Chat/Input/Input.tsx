import React, { ChangeEvent } from 'react'
import './input.css'

interface ChatInputProps {
    sendMessage : (e: React.MouseEvent<HTMLButtonElement>) => void,
    handleInput : (e :ChangeEvent<HTMLInputElement>) => void,
    message : string
}

const Input = ({ sendMessage, message, handleInput } : ChatInputProps) => {

  return(
      <form className="form">
        <a href="" className='file'>icon</a>
        <input
          className="input"
          type="text"
          placeholder="Write a Message"
          value={message}
          onChange={handleInput}
        />
      <button onClick={sendMessage}>Send</button>
      </form>
  )

}
  
  export default Input;