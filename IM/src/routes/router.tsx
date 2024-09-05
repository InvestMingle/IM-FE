import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/common/ErrorPage/ErrorPage";
import Chat from "../pages/Chat/Chat";
import Layout from "./Layout";
import AuthRoute from "./AuthRoute";

const auth = true;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        path : '', 
        element : <Main /> 
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
    ]
  },
  {
    path: "/chat/:chatId",
    element: <AuthRoute auth={auth} component={<Chat />}/>,
    errorElement: <ErrorPage />
  }
]);
