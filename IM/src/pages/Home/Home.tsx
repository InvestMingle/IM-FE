import { Link } from "react-router-dom";
import "./Home.css";
import { useChatStore } from "../../stores/ChatStores";


function Home() {

  return (
    <form className="main">
      <h1 className="titleH">I'M</h1>
      <div>
        <p className="chat-title">Chat</p>
        <Link to={`/chat`}>
          <button className="btnH">
            <span className="ycircle">SAM</span>
            <span className="stock">삼성전자</span>
          </button>
        </Link>
      </div>
    </form>
  );
}

export default Home;
