import { RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import { router } from "./routes/router";

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
