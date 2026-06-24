import express from "express";
const router = express.Router();

import expenseAdd from "./routes.expenseAdd.js";

router.use("/expenseAdd", expenseAdd);

export default router;
