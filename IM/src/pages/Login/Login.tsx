import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const api = "https://stock.bulbtalk.com";

  const [form, setForm] = useState({
    email: "",
    password: "",
    Error: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endPoint = "/auth/token/";

    // 1. 입력 확인
    if (!form.email || !form.password) {
      alert("이메일과 비밀번호를 입력하세요.");
      return;
    }

    try {
      // 2. 로그인 요청 보내기
      const response = await axios.post(api + endPoint, {
        email: form.email,
        password: form.password,
      });

      if (response.status === 200) {
        // 3. 토큰 저장
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);

        console.log("로그인 성공:", response.data);

        // 4. 홈화면 이동
        // navigate("/home");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인 중 문제가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <form className="home" onSubmit={handleSubmit}>
      <h1 className="title">로그인</h1>
      <div className="id">
        <span className="email">이메일</span>
        <input
          className="inEmail"
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="password">
        <span className="pw">비밀번호</span>
        <input
          className="inPw"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <button className="signupBtn" type="submit">
        로그인
      </button>
    </form>
  );
}

export default Login;
