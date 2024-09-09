import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "./store";

export const useBackNavigate = (): void => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();

  // 뒤로 가기
  useEffect(() => {
    history.pushState(null, "", window.location.href);

    const handleBackNavigate = () => {
      if (isLoggedIn) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        useAuthStore.getState().logout();
        navigate("/");
      } else {
        navigate("/login");
      }
    };

    window.addEventListener("popstate", handleBackNavigate);

    return () => {
      window.removeEventListener("popstate", handleBackNavigate);
    };
  }, [isLoggedIn, navigate]);
};
