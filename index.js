import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import fs from "fs";
import http from "http";
import path, { dirname } from "path";
import querystring from "querystring";
import { fileURLToPath } from "url";
import { connect } from "http2";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

dotenv.config();
// console.log(__dirname, __filename);

const mongoURI = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

// console.log(mongoURI);
let db, studentCollection;

const dbConnect = async function dbConnection() {
  const client = new MongoClient(mongoURI);
  await client.connect();
  db = client.db(DB_NAME);
  studentCollection = db.collection("students");
};

if (dbConnect) {
  console.log("Database connected succefully");
}

http
  .createServer(async (req, res) => {
    if (req.url === "/api/students" && req.method === "POST") {
      console.log("api/students call successfull");
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", async () => {
        const studentData = JSON.parse(body);

        try {
          await studentCollection.insertOne(studentData);
          console.log("student data saved to MongoDB");
          res.writeHead(200, "Successfull");
        } catch (error) {
          console.log("student data not saved to MongoDB");
          res.writeHead(500, "Not Successfull");
        }
      });
    } else if (req.url === "/api/students" && req.method === "GET") {
      const dataFetched = await studentCollection.find().toArray();

      res.end(JSON.stringify(dataFetched));

      res.writeHead(200, { "content-type": "application/json" });
      res.end("Student details fetched successfully");
    } else if (
      req.method === "PUT" &&
      req.url.startsWith("/api/students?id=")
    ) {
      //   console.log("I ame here");
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", async () => {
        try {
          const url = new URL(req.url, `http://${req.headers.host}`);
          const id = url.searchParams.get("id");

          console.log(id);
          const updatedData = JSON.parse(body);

          console.log(updatedData);
          const supdatedData = await studentCollection.updateOne(
            { Id: id },
            { $set: updatedData },
          );

          console.log(supdatedData);

          res.writeHead(200, { "content-type": "application/json" });
          res.end("Student updated successfully");
        } catch (error) {
          res.writeHead(500, { "content-type": "application/json" });
          res.end("Student Not updated successfully");
        }
      });
    }
  })
  .listen(3000, async () => {
    await dbConnect();
    console.log("Server is running on http://localhost:3000");
  });
