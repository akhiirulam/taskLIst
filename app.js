import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import { connect } from "./config/mongo.config.js";

dotenv.config();

connect();
const app = express();

app.use("/api", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
