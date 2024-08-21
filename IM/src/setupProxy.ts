const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app:any) => {
    // app.use(
    //     "/",
    //     createProxyMiddleware({
    //         target: "http://localhost:8080",
    //         changeOrigin: true,
    //     })
    // );
    app.use(
        "/chat",
        createProxyMiddleware({ target: "http://localhost:8080", ws: true })
    );
};