import { useEffect, useRef, useState } from "react";
import SockJS from 'sockjs-client';
import './Chat.css'
import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import {  MessageContent } from "./type";
import Header from "./Header/Header";
import { CompatClient, Stomp } from "@stomp/stompjs";
import { useHandleInputMessage } from "../../hooks/useHandleMessage";
import { useChatStore } from "../../stores/ChatStores";


const Chat = () => {
  const nickname = "please" //auth에서 받아오기?
  // const {roomId} = useParams()
  let roomId = 1

  const {client, connect, sendMessage, listeners,isConnected,currentRoomId,handleSubscribe} = useChatStore();

  const [message, setMessage] = useState<MessageContent>();
  const [messages, setMessages] = useState<MessageContent[]>([]);
  const {inputMessage, handleInputMessage, handleDeleteInputMessage } = useHandleInputMessage();
 
  const handleSend = () => {
    sendMessage('',message);
  }


  useEffect(()=>{
    console.log("connect시도")
    connect('http://localhost:8080/chat',1);
    if (client) {
      console.log("Client connected:", client);
    } else {
      console.log("Client not connected.");
  }

  },[])

      // sendMessage('/pub/chat',message)


  useEffect(() => {
    if (message) {
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  }, [message]);

  
  return (
    <>
      <Header room={'삼성전자 주식방'}/>
      <div className="chatContainer">
        <Messages messages={messages} user={nickname} />
        <Input sendMessage={handleSend} message={inputMessage} handleInput={handleInputMessage}  />
      </div>    
    </>

  )
}

export default Chat