import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";

interface chatHeaderProps {
  channelName : string;
}

const Header = ({channelName} : chatHeaderProps) => {
  return (
    <div className="text-xl flex flex-row items-start py-2 ">
        <Link to='/home' className='inline pt-1 pl-1'><FaAngleLeft /></Link>
        <div className='pl-2'>{channelName} 주식방</div>
    </div>
  )
}

export default Header