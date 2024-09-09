import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { checkEmail, checkNickname, handleSubmit } from "./services/register";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    chkPassword: "",
    nickname: "",
    pwError: "",
    cpwError: "",
    alertMsg: "",
    alertType: "",
  });

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
      onSubmit={(e) => handleSubmit(e, form, setForm, navigate)}
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

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="h-14 rounded-xl text-lg"
              type="button"
              variant="outline"
              onClick={() => checkEmail(form, setForm)}
            >
              중복확인
            </Button>
          </AlertDialogTrigger>
          {(form.alertMsg === "이메일을 입력해주세요." ||
            form.alertMsg === "잘못된 입력값입니다." ||
            form.alertMsg === "중복된 이메일입니다.") && (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{form.alertMsg}</AlertDialogTitle>
                <AlertDialogDescription>Warning🚨</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>확인</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
          {form.alertMsg === "사용 가능한 이메일입니다." && (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{form.alertMsg}</AlertDialogTitle>
                <AlertDialogDescription>Success🎉</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>확인</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
        </AlertDialog>
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
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="h-14 rounded-xl text-lg"
              type="button"
              variant="outline"
              onClick={() => checkNickname(form, setForm)}
            >
              중복확인
            </Button>
          </AlertDialogTrigger>
          {(form.alertMsg === "닉네임을 입력해주세요." ||
            form.alertMsg === "중복된 닉네임입니다.") && (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{form.alertMsg}</AlertDialogTitle>
                <AlertDialogDescription>Warning🚨</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>확인</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
          {form.alertMsg === "사용 가능한 닉네임입니다." && (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{form.alertMsg}</AlertDialogTitle>
                <AlertDialogDescription>Success🎉</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>확인</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
        </AlertDialog>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="h-14 rounded-xl font-bold text-2xl" type="submit">
            Sign up
          </Button>
        </AlertDialogTrigger>
        {form.alertMsg === "회원가입 중 문제가 발생했습니다." && (
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{form.alertMsg}</AlertDialogTitle>
              <AlertDialogDescription>
                다시 시도해주세요.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>확인</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        )}
      </AlertDialog>
    </form>
  );
}

export default Register;
