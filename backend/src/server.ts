import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import http from "http";
import https from "https";
import fs from "fs";
import cors from "cors";
import connentDb from "./config/db";
import errorHandler from "./middleware/errorMiddleware";

//Import routes
import userRoutes from "./routes/userRoutes";

dotenv.config();
const PORT = process.env.PORT || 5000;

connentDb();
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", userRoutes);
app.use(errorHandler);
const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

httpServer.listen(PORT, () => {
  console.log("HTTP Server is running on port " + PORT);
});
httpsServer.listen(8000, () => {
  console.log(`HTTPS Server is running on port 8000`);
});
