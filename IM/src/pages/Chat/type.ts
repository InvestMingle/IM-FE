export interface MessageContent {
  type : string,
  sender : string,
  data : string,
  channelId: number
}

export interface MessagesProps {
    messages: MessageContent[];
    user: string;
}

export interface MessageProps {
  writer: string;
  contents: string;
  user: string;
}