import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Chat from "../pages/Chat/Chat";
import ChatList from "../pages/ChatList/ChatList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/chat",
    element: <ChatList />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
