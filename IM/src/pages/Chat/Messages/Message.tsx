import "./Message.css";
import { MessageProps } from "../type";

const Message = ({ writer, text, user }: MessageProps) => {
  let current_user = "others";
  const trimmedName = user.trim().toLowerCase();
  console.log(user, writer, text);
  if (writer == trimmedName) {
    current_user = "me";
  } else if (writer == 'ai_name') {
    current_user ='ai_name'
  } else {
    current_user = "others"
  }

  return (
    <>
      <div className={current_user}>
        <span className="profile">{writer}</span>
        <p className="textbox">{text}</p>
      </div>
    </>
  );
};

export default Message;
