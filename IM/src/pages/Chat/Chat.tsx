import { CompatClient, Stomp } from "@stomp/stompjs";
import { ChangeEvent, useEffect, useRef, useState } from "react"
import SockJS from "sockjs-client";
import { MessageContent } from "./type";
import Messages from "./Messages/Messages";
import Header from "./Header/Header";
import Chart from "../Chart/Chart"
import { getInfo } from "../../stores/getMyinfo";
import InputBox from "./Input/Input";
import { useParams } from "react-router-dom";


const Chat = () => {

  const channelName = useParams().chatId || "unknown"
  const [nickname,setNickname] = useState("");


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const result = await getInfo;
        setNickname(result.nickname);
      } catch (error) {
        console.error("Error fetching info:", error);
      }
    };
  
    fetchData();     
  },[])

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageContent[]>([]);


  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() !== '') {
      console.log('Message sent: ', message);
      client.current?.send('/pub/chat',{},
        JSON.stringify({
          sender: nickname,
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
    const socket = new SockJS(`http://35.216.23.46:8080/ws`);

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
    return () => {
      client.current?.disconnect();
    };
  }, [channelName]);

  return (
    <>
        <Chart />
      <div className="flex flex-col">
        <Header channelName={channelName} />
        <div className=" 
        grow flex flex-col-reverse h-screen relative overflow-y-auto pb-8">
          <Messages messages={messages} user={nickname} />

        </div>    
        <div className="sticky bottom-0 p-2 shadow-inner">
          <InputBox sendMessage={handleSubmit} message={message} handleInput={handleInputValue}  />
        </div>
      </div>
    </>
  )
}

export default Chat