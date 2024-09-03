// import React from "react";
import { RouterProvider } from "react-router-dom";
import {router } from "./routes/router";
import './routes/Layout.css'



//app.tsx
function App() {
  return (
    <>
      <div className="appContainer">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;