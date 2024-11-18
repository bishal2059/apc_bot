import http from "http";
import { configDotenv } from "dotenv";
import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

configDotenv();

const mode = process.env.NODE_PROCESS || "development";

const PORT = process.env.PORT;

const app = express();

if (mode == "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "dist")));

  const rootController = function (req, res) {
    res
      .status(200)
      .sendFile(path.join(__dirname, "..", "client", "index.html"));
    return;
  };

  app.use("/", rootController);

  app.use("*", rootController);
} else {
  app.use(cors());
}

const server = http.createServer(app);

console.log(mode);

server.listen(PORT, () => {
  console.log(`Server listening to port http://localhost:${8080}`);
});
