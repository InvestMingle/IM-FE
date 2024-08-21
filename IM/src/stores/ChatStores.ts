import { CompatClient, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { create } from "zustand";

interface StoreState {
    userId: number;
    client: CompatClient | null;
    listeners: Set<any>;
    isConnected: boolean;
    currentRoomId: number;
    connect: (url: string, roomId: number) => void;
    sendMessage: (url: string, message: any) => void;
    handleSubscribe: () => void;
  }
  
  export const useChatStore = create<StoreState>((set, get) => ({
    userId: 0,
    client: null,
    listeners: new Set(),
    isConnected: false,
    currentRoomId: 0,

    connect: (url: string, roomId: number) => {
      const socket = new SockJS(`${url}`);
      const client = Stomp.over(socket)

      set(() => ({ client: client, currentRoomId: roomId, isConnected: true }));
  
      client.connect({},
        ()=>{
        console.log("connected")
        },
        (error:any)=>{
          console.log(error)
        })
  
    },
    sendMessage: (destination: string, message: any) => {
      const { client, currentRoomId, isConnected } = get();
      if (client && isConnected) {
        client.send(destination, {}, JSON.stringify({
          type: "TALK",
          channelId: currentRoomId,
          sender: "nickname", // 'nickname'은 실제 사용자 이름으로 변경해야..
          data: message
        }));
      } else {
        console.warn("Cannot send message. Client is not connected.");
      }
    },
    handleSubscribe:()=>{
        const { client, isConnected } = get();
        console.log("handlesubscir",client)
        client?.subscribe(`sub/channel`,
            (message) => {
              console.log("구독!")
        //   setMessage(JSON.parse(message.body)) //구독한 방에서의 메세지 처리
            }
        )
    },
    publish:()=>{},
  }));