import './Header.css'

interface ChatHeaderProps {
    room : string;
}

const Header = ({room}:ChatHeaderProps) => {
  return (
    <div  className='chat_header'>
        <a href="" className='arrow'>{'<'}</a>
        <div className='header_title'>{room}</div>
    </div>
  )
}

export default Header