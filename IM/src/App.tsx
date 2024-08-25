import { RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import { router } from "./routes/router";
import Header from "./components/common/Header/Header";
import Chart from "./pages/Chart/Chart.tsx";
function App() {
  return (
    <>
      <Layout>
        <Header />
          <Chart />
        <RouterProvider router = {router}/>
      </Layout>
    </>
  );
}

export default App;
