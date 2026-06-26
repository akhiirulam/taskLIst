import express from "express";

import {
  uploadFile,
  displayFile,
  uploadImage,
} from "../controller/uploadFile.controller.js";
import multer from "multer";

import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

// router.post("/uploadFile", upload.single("file"), uploadFile);

router.post("/uploadFile", uploadFile);
router.post("/uploadImage", upload.single("file"), uploadImage);
router.get("/fileDisplay", displayFile);

export default router;
