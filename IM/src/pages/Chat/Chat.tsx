import { CompatClient, Stomp } from "@stomp/stompjs";
import { ChangeEvent, useEffect, useRef, useState } from "react"
import SockJS from "sockjs-client";
import { MessageContent } from "./type";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import './Chat.css'
import Header from "./Header/Header";

const Chat = () => {

  const channelName = "samsung"
  const nickName = 'me';

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageContent[]>([
    {sender:'user1', data: "hello", channelId: channelName, type:"TALK"},
    {sender:'IMBOT', data:'오늘의 삼성전자 주가는.....', channelId:channelName, type:"TALK"}
  ]);


  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() !== '') {
      console.log('Message sent: ', message);
      client.current?.send('/pub/chat',{},
        JSON.stringify({
          sender: nickName,
          channelId : channelName,
          type : "TALK",
          data : message
        })
      )
      setMessage(''); 
    }
  };

  const client = useRef<CompatClient | null>(null);

  const connectHandler = () => {
    const socket = new SockJS(`http://localhost:8080/chat`);

    client.current = Stomp.over(()=>socket);
    client.current.connect(
      {},
      () => {
        client.current?.subscribe(
          `/sub/channel/${channelName}`,
          (message)=> {
            // 기존 대화 내역에 새로운 메시지 추가
            const msg = JSON.parse(message.body)
            setMessages((prev)=> [...prev,msg])
          }
        );
      
      },
    );
  };

  
  useEffect(() => {
    connectHandler();
  }, [channelName]);

  return (
    <>
      <div className="chat">
        <Header />
        <div className="chatContainer">
          <Messages messages={messages} user={nickName} />
        </div>    
        <div className="inputContainer">
          <Input sendMessage={handleSubmit} message={message} handleInput={handleInputValue}  />
        </div>
      </div>
    </>
  )
}

export default Chat