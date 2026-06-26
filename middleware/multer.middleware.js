import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dest = "uploads";

    if (file.mimetype.startsWith("image/")) {
      dest = "uploads/images";
    } else if (file.mimetype === "application/pdf") {
      dest = "uploads/pdf";
    }

    // Create folder if it doesn't exist
    fs.mkdirSync(dest, { recursive: true });

    cb(null, dest);
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

export const upload = multer({ storage });
