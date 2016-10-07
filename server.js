import path from "path";
import http from "http";

import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "./webpack.config";

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get("/devboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "devboard.html"));
});
app.use("/", express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const port = process.env.PORT || "1987";

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://localhost:${port}`);
  // eslint-disable-next-line no-console
  console.log(`Devboard on http://localhost:${port}/devboard`);
});
