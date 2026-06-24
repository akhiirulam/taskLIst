import express from "express";

import expenseRoutes from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", expenseRoutes);

app.listen(3000, () => {
  console.log("server is running");
});
