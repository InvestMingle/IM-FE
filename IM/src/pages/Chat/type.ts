export interface MessageContent {
    sender : string;
    type : string;
    data : string;
    channelId: string;
}

export interface MessageProps {
    message: MessageContent;
    user: string;
}

export interface MessagesProps {
    messages: MessageContent[];
    user: string;
}
