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
import familyRoutes from "./routes/familyRoutes";
import transactionRoutes from "./routes/transactionRoutes";

dotenv.config();

const PORT_HTTP = process.env.PORT_HTTP || 5000;
const PORT_HTTPS = process.env.PORT_HTTPS || 8000;

//Start db connection
connentDb();

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Apllying all routes
app.use("/api/user", userRoutes);
app.use("/api/family", familyRoutes);
app.use("/api/transaction", transactionRoutes);
app.use(errorHandler);

//Create http and https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

//Statrt http servers
httpServer.listen(PORT_HTTP, () => {
  console.log(`HTTP Server is running on port ${PORT_HTTP}`);
});
httpsServer.listen(PORT_HTTPS, () => {
  console.log(`HTTPS Server is running on port ${PORT_HTTPS}`);
});
