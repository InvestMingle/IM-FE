export interface ChatProps {
    nickname : string,
    room : string
  }

  export interface MessageContent {
    writer: string;
    text: string;
}

export interface MessagesProps {
    messages: MessageContent[];
    user: string;
}

export interface MessageProps {
  writer: string;
  text: string;
  user: string;
}