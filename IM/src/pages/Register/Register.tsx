import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  };

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
    <form
      className="flex flex-col w-4/5 space-y-6 ml-14"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center space-y-3 mb-20">
        <h2 className="text-4xl font-bold mt-6">Join I'M</h2>
        <p className="text-base text-muted-foreground">
          You can easily sign up
        </p>
      </div>
      <div className="flex">
        <Input
          placeholder="Email"
          className="h-14 rounded-xl text-lg mr-2"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Button
          className="h-14 rounded-xl text-lg"
          type="button"
          variant="outline"
        >
          중복확인
        </Button>
      </div>
      <Input
        placeholder="Full name"
        className="h-14 rounded-xl text-lg"
        type="text"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <Input
        placeholder="Password"
        className="h-14 rounded-xl text-lg"
        type="password"
        value={form.password}
        onChange={handlePassword}
      />
      {form.pwError && <p style={{ color: "#BD0101" }}>{form.pwError}</p>}
      <Input
        placeholder="Check Password"
        className="h-14 rounded-xl text-lg"
        type="password"
        value={form.chkPassword}
        onChange={handlePasswordCheck}
      />
      {form.cpwError && <p style={{ color: "#BD0101" }}>{form.cpwError}</p>}
      <div className="flex">
        <Input
          placeholder="Nickname"
          className="h-14 rounded-xl text-lg mr-2"
          type="text"
          value={form.nickname}
          onChange={(e) => setForm({ ...form, nickname: e.target.value })}
        />
        <Button
          className="h-14 rounded-xl text-lg"
          type="button"
          variant="outline"
        >
          중복확인
        </Button>
      </div>
      <Button className="h-14 rounded-xl font-bold text-2xl" type="submit">
        Sign up
      </Button>
    </form>
  );
}

export default Register;
