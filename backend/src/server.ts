import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import http from "http";
import https from "https";
import fs from "fs";
import cors from "cors";
import connentDb from "./config/db";
import errorHandler from "./middleware/errorMiddleware";
import cookieParser from "cookie-parser";

//Import routes
import userRoutes from "./routes/userRoutes";
import familyRoutes from "./routes/familyRoutes";
import transactionRoutes from "./routes/transactionRoutes";

dotenv.config();

const PORT_HTTP = process.env.PORT_HTTP || 5000;
const PORT_HTTPS = process.env.PORT_HTTPS || 8000;
const REACT_APP_URL = process.env.REACT_APP_URL || "http://localhost:3000";
//Start db connection
connentDb();

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

const app = express();
//Create http and https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);
app.use(cors({ credentials: true, origin: REACT_APP_URL }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Apllying all routes
app.use("/api/user", userRoutes);
app.use("/api/family", familyRoutes);
app.use("/api/transaction", transactionRoutes);
app.use(errorHandler);

//cookis test

app.get("/getCookes", (req: Request, res: Response) => {
  res.cookie(`Cookie token name`, `encrypted cookie string Value`, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
  });
  res.send("Cookie have been saved successfully");
});

app.get("/deletecookie", (req: Request, res: Response) => {
  //show the saved cookies
  res.clearCookie("Cookie token name");
  res.send("Cookie has been deleted successfully");
});

//Statrt http servers
httpServer.listen(PORT_HTTP, () => {
  console.log(`HTTP Server is running on port ${PORT_HTTP}`);
});
httpsServer.listen(PORT_HTTPS, () => {
  console.log(`HTTPS Server is running on port ${PORT_HTTPS}`);
});
