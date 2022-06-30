import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import http from "http";
import https from "https";
import fs from "fs";
import connentDb from "./config/db";
dotenv.config();

connentDb();
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

httpServer.listen(8080, () => {
  console.log("HTTP Server is running on port 8080");
});
httpsServer.listen(8000, () => {
  console.log(`HTTPS Server is running on port 8000`);
});
