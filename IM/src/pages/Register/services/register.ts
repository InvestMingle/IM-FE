import axios from "axios";
import { v4 as uuidv4 } from "uuid";

interface User {
  email: string;
  username: string;
  nickname: string;
}

const api = "https://stock.bulbtalk.com";
const user = "/user/";
const token = "/auth/token/";

export const checkEmail = async (form: any, setForm: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const tempNick = `tempNick_${uuidv4().slice(0, 8)}`;

  // 이메일이 비어있는 경우 또는 형식이 올바르지 않은 경우
  if (!form.email) {
    setForm({ ...form, alertMsg: "이메일을 입력해주세요." });
    return;
  } else if (!emailRegex.test(form.email)) {
    setForm({ ...form, alertMsg: "잘못된 입력값입니다." });
    return;
  }

  try {
    // 이메일 중복 확인
    const response = await axios.get(api + user, {
      params: {
        email: form.email,
        username: "tempUser",
        nickname: tempNick,
      },
    });
    console.log(response);

    const isEmailTaken = response.data.results.some(
      (user: User) => user.email === form.email
    );

    if (isEmailTaken) {
      setForm({ ...form, alertMsg: "중복된 이메일입니다." });
    } else {
      setForm({ ...form, alertMsg: "사용 가능한 이메일입니다." });
    }
  } catch (error) {
    console.error(error);
  }
};

export const checkNickname = async (form: any, setForm: any) => {
  const tempMail = `temp@${uuidv4().slice(0, 8)}.com`;

  if (!form.nickname) {
    setForm({ ...form, alertMsg: "닉네임을 입력해주세요." });
    return;
  }

  try {
    // 닉네임 중복 확인
    const response = await axios.get(api + user, {
      params: {
        email: tempMail,
        username: "tempUser",
        nickname: form.nickname,
      },
    });
    console.log(response);

    const isNicknameTaken = response.data.results.some(
      (user: User) => user.nickname === form.nickname
    );

    if (isNicknameTaken) {
      setForm({ ...form, alertMsg: "중복된 닉네임입니다." });
    } else {
      setForm({ ...form, alertMsg: "사용 가능한 닉네임입니다." });
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleSubmit = async (
  e: React.FormEvent,
  form: any,
  setForm: any,
  navigate: any
) => {
  e.preventDefault();

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

        // 4. 홈화면 이동
        navigate("/login");
      }
    }
  } catch (error) {
    setForm({ ...form, alertMsg: "회원가입 중 문제가 발생했습니다." });
  }
};
