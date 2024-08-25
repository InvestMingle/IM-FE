import { Link } from 'react-router-dom';
import './Header.css'
import { FaAngleLeft } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="chatHeaderContainer">
        <Link to='/home' className='goBack'><FaAngleLeft /></Link>
        <div className='channelTitle'>삼성전자 주식방</div>
    </div>
  )
}

export default Header