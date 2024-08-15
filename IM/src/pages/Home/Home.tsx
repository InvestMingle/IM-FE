import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <h1 className="title">I'M</h1>
        <div className="btn">
          <button className="loginBtn">로그인</button>
          <button className="signupBtn">회원가입</button>
        </div>
      </div>
    </>
  );
}

export default Home;
