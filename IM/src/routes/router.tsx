import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Chat from "../pages/Chat/Chat";
import ChatList from "../pages/ChatList/ChatList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);
