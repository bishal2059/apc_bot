import http from "http";
import express from "express";
import path from "path";

const PORT = 8080;

const app = express();

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

const rootController = function (req, res) {
  res
    .statusCode(200)
    .sendFile(path.join(__dirname, "..", "client", "index.html"));
  return;
};

app.use("/", rootController);

app.use("*", rootController);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening to port http://localhost:${8080}`);
});
