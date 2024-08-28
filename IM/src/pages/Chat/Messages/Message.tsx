import "./Message.css";
import { MessageProps } from "../type";
import { FaRobot } from "react-icons/fa6";
import {IoMdPerson} from "react-icons/io";

const Message = ({ message, user }: MessageProps) => {

    const {sender, data} = message
  let current_user = "others";
  const trimmedName = user.trim().toLowerCase();

  if (sender == trimmedName) {
    current_user = "me";
  } else if (sender == 'IMBOT') {
    current_user ='IMBOT'
  } else {
    current_user = "others"
  }
  return (
    <>
      <div className={current_user}>
        {(current_user == 'others')
        ?
        <span><IoMdPerson/></span>
        :
        (current_user == 'IMBOT')
        ?
        <span><FaRobot/></span>
        :
        null
        }
        <span className="profile">{sender}</span>
        <div className="textbox">{data}</div>
      </div>
    </>
  );
};
export default Message;