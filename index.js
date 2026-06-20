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
  .createServer((req, res) => {
    if (req.url === "/api/students" && req.method === "POST") {
      console.log("api/students call successfull");
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", async () => {
        const inputData = querystring.parse(body);
        const studentData = inputData;
      });
    }
  })
  .listen(3000, async () => {
    await dbConnect();
    console.log("Server is running on http://localhost:3000");
  });
