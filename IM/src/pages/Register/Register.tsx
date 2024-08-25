import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {

  const navigate = useNavigate();
  const api = "https://stock.bulbtalk.com";

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    chkPassword: "",
    nickname: "",
    pwError: "",
    cpwError: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = "/user/";
    const token = "/auth/token/";

    try {
      // 1. 회원가입 요청 보내기
      const response = await axios.post(api + user, {
        email: form.email,
        username: form.username,
        nickname: form.nickname,
        password: form.password,
      });

      if (response.status === 201) {
        // 2. 회원가입 성공 시 토큰 발급 요청
        const tokenResponse = await axios.post(api + token, {
          email: form.email,
          password: form.password,
        });

        if (tokenResponse.status === 200) {
          // 3. 토큰 저장
          localStorage.setItem("accessToken", tokenResponse.data.access);
          localStorage.setItem("refreshToken", tokenResponse.data.refresh);

          console.log("회원가입 성공:", response.data);

          // 4. 홈화면 이동
          navigate("/home");
        }
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 중 문제가 발생했습니다. 다시 시도해 주세요.");
    }
  }

  // 비밀번호 조건 확인
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPw = e.target.value;

    let errorMessage = "";
    if (newPw.length < 4 || newPw.length > 17) {
      errorMessage = "4~16자 이내로 작성하세요.";
    } else if (!/\d/.test(newPw) || !/[!@#?]/.test(newPw)) {
      errorMessage = "숫자, 특수문자(!@#?)를 포함해야 합니다.";
    }

    setForm({ ...form, password: newPw, pwError: errorMessage });
  };

  // 비밀번호 확인
  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChkPw = e.target.value;
    const errorMessage =
      form.password !== newChkPw ? "비밀번호가 틀립니다." : "";

    setForm({ ...form, chkPassword: newChkPw, cpwError: errorMessage });
  };

  return (
    <form className="main" onSubmit={handleSubmit}>
      <div className="divR">
        <span className="textR">이메일</span>
        <div className="chk">
          <input
            className="inputRS"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <button className="chkbtn" type="button">
            중복확인
          </button>
        </div>
      </div>
      <div className="divR">
        <span className="textR">이름</span>
        <input
          className="inputR"
          type="text"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
      </div>
      <div className="divR">
        <span className="textR">비밀번호</span>
        <input
          className="inputR"
          type="password"
          value={form.password}
          onChange={handlePassword}
        />
        {form.pwError && <p style={{ color: "#BD0101" }}>{form.pwError}</p>}
      </div>
      <div className="divR">
        <span className="textR">비밀번호 확인</span>
        <input
          className="inputR"
          type="password"
          value={form.chkPassword}
          onChange={handlePasswordCheck}
        />
        {form.cpwError && <p style={{ color: "#BD0101" }}>{form.cpwError}</p>}
      </div>
      <div className="divR">
        <span className="textR">닉네임</span>
        <div className="chk">
          <input
            className="inputRS"
            type="text"
            value={form.nickname}
            onChange={(e) => setForm({ ...form, nickname: e.target.value })}
          />
          <button className="chkbtn" type="button">
            중복확인
          </button>
        </div>
      </div>
      <button className="signupBtn" type="submit">
        I'M 시작하기
      </button>
    </form>
  );
}

export default Register;
