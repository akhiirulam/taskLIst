import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFile = (req, res) => {
  try {
    // console.log("I am here");
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }
    return res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      file: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        path: req.file.path,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({
      success: false,
      message: "Error uploading file",
      error: error.message,
    });
  }
};

export const displayFile = (req, res) => {
  // console.log("I am here");
  fs.readdir("./uploads", (err, files) => {
    try {
      const fileURL = files.map((file) => `http://localhost:5500/${file}`);
      res.send(fileURL);
    } catch (error) {
      res.status(404).json("File not found");
    }
  });
};

export const uploadImage = async (req, res) => {
  console.log(cloudinary.config());
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  console.log("file path: ", req.file.path);
  console.log("Option: ", options);

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log("result:", result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};
