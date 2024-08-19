import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Chat from "../pages/Chat/Chat";
import ChatList from "../pages/ChatList/ChatList";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Home/>
    },
    {
        path: '/chat',
        element : <ChatList />
    }
])