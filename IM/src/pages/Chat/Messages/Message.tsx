import "./Message.css";
import { MessageProps } from "../type";

const Message = ({ writer, contents, user }: MessageProps) => {
  let current_user = "others";
  const trimmedName = user.trim().toLowerCase();
  console.log(user, writer, contents);
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
        <p className="textbox">{contents}</p>
      </div>
    </>
  );
};

export default Message;
