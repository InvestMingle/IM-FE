import { RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import { router } from "./routes/router";
import Header from "./components/common/Header/Header";

function App() {
  return (
    <>
      <Layout>
        <RouterProvider router = {router}/>
      </Layout>
    </>
  );
}

export default App;
