import express from "express";
import router from "./routes/routes.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "uploads")));
app.use("/api", router);

app.listen(5500, () => {
  console.log("Server listen");
});
