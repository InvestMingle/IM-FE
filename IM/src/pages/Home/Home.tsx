import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <h1 className="title">I'M</h1>
        <div className="btn">
          <Link to="/login">
            <button className="loginBtn">로그인</button>
          </Link>
          <Link to="/register">
            <button className="signupBtn">회원가입</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
