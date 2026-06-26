import express from "express";
import { fileUpload } from "../controller/fileUpload.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import multer from "multer";
const router = express.Router();

const uploadMultiple = upload.fields([
  {
    name: "photo",
    maxCount: 1,
  },
  {
    name: "resume",
    maxCount: 1,
  },
]);

router.post("/fileUpload", uploadMultiple, fileUpload);

export default router;
