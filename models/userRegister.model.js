import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  imagefilename: {
    type: String,
    required: true,
    trim: true,
  },
  pdffilename: {
    type: String,
    required: true,
    trim: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  pdfurl: {
    type: String,
    required: true,
  },
});

const userData = mongoose.model("userData", userSchema);

export default userData;
