import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <form className="home-main">
      <div className="chatlist-box">
        <Link to="/chat">
          <button className="btnH">
            <span className="ycircle">SAM</span>
            <span className="stock">삼성전자</span>
          </button>
        </Link>
        <Link to="/chat">
          <button className="btnH">
            <span className="gcircle">SK</span>
            <span className="stock">SK 하이닉스</span>
          </button>
        </Link>
        <Link to="/chat">
          <button className="btnH">
            <span className="ycircle">LG</span>
            <span className="stock">LG 에너지 솔루션</span>
          </button>
        </Link>
        <Link to="/chat">
          <button className="btnH">
            <span className="gcircle">SAM</span>
            <span className="stock">삼성 바이오로직스</span>
          </button>
        </Link>
        <Link to="/chat">
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
