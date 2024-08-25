import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <form className="home-main">
      <div className="chatlist-box">
        {/* <p className="chat-title">Chat</p> */}
        <Link to="/samsung">
          <button className="btnH">
            <span className="ycircle">SAM</span>
            <span className="stock">삼성전자</span>
          </button>
        </Link>
        <Link to="/skh">
          <button className="btnH">
            <span className="gcircle">SK</span>
            <span className="stock">SK 하이닉스</span>
          </button>
        </Link>
        <Link to="/lgsolution">
          <button className="btnH">
            <span className="ycircle">LG</span>
            <span className="stock">LG 에너지 솔루션</span>
          </button>
        </Link>
        <Link to="/sam_bio_chat">
          <button className="btnH">
            <span className="gcircle">SAM</span>
            <span className="stock">삼성 바이오로직스</span>
          </button>
        </Link>
        <Link to="/hd_car">
          <button className="btnH">
            <span className="ycircle">HD</span>
            <span className="stock">현대차</span>
          </button>
        </Link>
      </div>
    </form>
  );
}

export default Home;
