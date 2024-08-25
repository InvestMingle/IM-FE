import "./Message.css";
import { MessageProps } from "../type";

const Message = ({ message, user }: MessageProps) => {

    const {sender, data} = message
  let current_user = "others";
  const trimmedName = user.trim().toLowerCase();

  if (sender == trimmedName) {
    current_user = "me";
  } else if (sender == 'ai_name') {
    current_user ='ai_name'
  } else {
    current_user = "others"
  }
  return (
    <>
      <div className={current_user}>
        <span className="profile">{sender}</span>
        <p className="textbox">{data}</p>
      </div>
    </>
  );
};
export default Message;