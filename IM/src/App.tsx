// import React from "react";
import { RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import { router } from "./routes/router";
import Header from "./components/common/Header/Header";
import CandlestickChart from './CandlestickChart';


function App() {
    return (
        <>
            <Layout>

                <Header />
                <RouterProvider router={router} />
                <CandlestickChart />
            </Layout>
        </>
    );
}

export default App;