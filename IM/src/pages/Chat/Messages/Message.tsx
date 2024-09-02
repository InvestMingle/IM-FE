import "./Message.css";
import { MessageProps } from "../type";
import { FaRobot } from "react-icons/fa6";
import {IoMdPerson} from "react-icons/io";
import { cn } from "@/lib/utils";

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
        <div className="flex pb-1">
        {(current_user == 'others')
        ?
        <span className="text-xl"><IoMdPerson/></span>
        :
        (current_user == 'IMBOT')
        ?
        <span className="userPic"><FaRobot/></span>
        :
        null
        }
        <span className="flex ml-2 profile">{sender}</span>
        </div>
        <div className={cn('flex h-fit w-fit max-w-56 rounded-md border border-input bg-background px-3 py-2 mb-5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2')}>{data}</div>
      </div>
    </>
  );
};
export default Message;