import userData from "../models/userRegister.model.js";

export const fileUpload = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const photo = req.files.photo?.[0];
    const resume = req.files.resume?.[0];

    const photoName = photo.filename;
    const resumeName = resume.filename;

    const photoPath = `../uploads/images/${photoName}`;
    const resumePath = `../uploads/pdf/${resumeName}`;

    const dataUpload = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      imagefilename: photoName,
      pdffilename: resumeName,
      imageurl: photoPath,
      pdfurl: resumePath,
    };

    const result = await userData.insertMany(dataUpload);
    res.status(201).json({
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const viewData = async (req, res) => {
  try {
    console.log("i m here");
    const id = req.params.id;
    const result = await userData.findById(id);
    if (!result) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
