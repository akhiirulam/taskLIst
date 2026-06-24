import express from "express";
import expenseAddController from "../controllers/controller.expenseAdd.js";

const router = express.Router();

router.post("/add", expenseAddController);

export default router;
