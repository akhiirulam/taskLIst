import express from "express";

import expenseRoutes from "./routes/routes.js";

import connectDB from "./config/dbConfig.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectDB();

app.use("/", expenseRoutes);

app.listen(3000, () => {
  console.log("server is running");
});
