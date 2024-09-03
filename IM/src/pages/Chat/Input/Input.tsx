import React, { ChangeEvent } from 'react'
import { AiTwotoneFileAdd } from "react-icons/ai";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
    sendMessage : (e: React.MouseEvent<HTMLButtonElement>) => void,
    handleInput : (e :ChangeEvent<HTMLInputElement>) => void,
    message : string
}

const InputBox = ({ sendMessage, message, handleInput } : ChatInputProps) => {

  return(
      <form className="flex justify-center p-1">
        <a href="" className='text-4xl p-1 mr-2'><AiTwotoneFileAdd/></a>
        <div className="flex w-full max-w-sm items-center space-x-2 ">
          <Input
            type="text"
            placeholder="Write a Message"
            value={message}
            onChange={handleInput}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>

      </form>
  )

}
  
  export default InputBox;