import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <>
      <div className="main">
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

export default Main;
