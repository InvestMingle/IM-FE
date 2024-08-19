import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <form className="main">
      <h1 className="titleH">I'M</h1>
      <div>
        <p className="chat-title">Chat</p>
        <Link to="/sam_chat">
          <button className="btnH">
            <span className="ycircle">SAM</span>
            <span className="stock">삼성전자</span>
          </button>
        </Link>
        <Link to="/sk_chat">
          <button className="btnH">
            <span className="gcircle">SK</span>
            <span className="stock">SK 하이닉스</span>
          </button>
        </Link>
        <Link to="/lg_chat">
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
        <Link to="/hd_chat">
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
