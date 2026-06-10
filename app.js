const fs = require("fs");

fs.readFile("sample.pdf", (err, data) => {
  if (err) throw err;
  const pdfData = data.toString("base64");

  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <object data="data:application/pdf;base64,${pdfData}" type="application/pdf" width="100%" height="600px">
    <p>Your browser does not support embedding PDFs. 
       <a href=${pdfData}>Download the PDF</a> instead.
   </p>
   </object>
</body>
</html>`;

  fs.writeFile("pdfData.html", htmlCode, (writeFileError) => {
    if (writeFileError) {
      console.log("error");
    }
    {
      console.log("running");
    }
  });
});
