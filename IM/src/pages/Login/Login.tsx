import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useAuthStore from "./store";
import { useBackNavigate } from "./useBack";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Login() {
  const navigate = useNavigate();
  const api = "https://stock.bulbtalk.com";

  useBackNavigate();

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

        useAuthStore.getState().login();

        // 4. 홈화면 이동
        navigate("/home");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인 중 문제가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <form
      className="flex flex-col w-4/5 space-y-6 ml-14"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center space-y-3 mb-28">
        <h2 className="text-4xl font-bold mt-6">Welcome Back!</h2>
        <p className="text-base text-muted-foreground mb-28">
          Sign in your account
        </p>
      </div>
      <Input
        placeholder="Email"
        className="h-14 rounded-xl text-lg"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        className="h-14 rounded-xl text-lg"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button className="h-14 rounded-xl font-bold text-2xl" type="submit">
        Sign in
      </Button>
    </form>
  );
}

export default Login;
