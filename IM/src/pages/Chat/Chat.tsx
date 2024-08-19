import { ChangeEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client"
import './Chat.css'
import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import { ChatProps, MessageContent } from "./type";
import Header from "./Header/Header";


const Chat = ({nickname, room} : ChatProps) => {

  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageContent[]>([
    {writer:'1', text:'hihi'}, {writer:'2',text:'hello hello'},{writer:'주린이',text:'hi im 주린이'},
    {writer:'ai_name',text:"Websocket은 웹에서 실시간, 양방향 통신을 가능하게 하는 프로토콜이다. 개발자는 Websocket API를 통해 서버로 메시지를 보내고 서버의 응답을 위해 서버를 폴링하지 않고도 이벤트 중심 응답을 받는 것이 가능하다."}, {writer:'4', text:'오늘의 삼성주가는 얼마야?'},{writer:'1', text:'오늘의 삼성주가는 얼마야?'},{writer:'5', text:'오늘의 삼성주가는 얼마야?'},{writer:'2', text:'오늘의 삼성주가는 얼마야?'},{writer:'5', text:'오늘의 삼성주가는 얼마야?'},{writer:'주린이', text:'오늘의 삼성주가는 얼마야?'},{writer:'4', text:'오늘의 삼성주가는 얼마야?'},{writer:'3', text:'오늘의 삼성주가는 얼마야?'}
  ]);

  //닉네임과 방 이름을 서버에게 넘겨줌
  const socket:Socket = io('http://localhost:3000');
  useEffect(() => {
      socket.emit('join', { nickname, room });
      console.log('1) 입장 소켓 / 클라->서버');
    }, []);
    
  //사용자 인증이 됐다면 

  //서버에서 클라이언트로 보여주는 메세지들
  useEffect(()=>{
    socket.on('send_message', message => {
      setMessages([...messages, message]);
      console.log('3) 메세지 추가 / 클라');
    });
    console.log('4) 메세지 배열 확인', messages);
  },)

  //사용자가(클라이언트쪽에서) 메세지가 입력되고 전달될 
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  
    if (message) {
      socket.emit('send_message', message, nickname, room);
      setMessage('');
    }
  };

  return (
    <>
      <Header room={'삼성전자 주식방'}/>
      <div className="chatContainer">
        <Messages messages={messages} user={nickname} />
        <Input setMessage={setMessage} sendMessage={sendMessage} message={message} onChange={handleInputChange}  />
      </div>    
    </>

  )
}

export default Chat