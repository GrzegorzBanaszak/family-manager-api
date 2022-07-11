import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import connentDb from "./config/db";
import errorHandler from "./middleware/errorMiddleware";
import cookieParser from "cookie-parser";

//Zaimportowanie sciezek
import userRoutes from "./routes/userRoutes";
import familyRoutes from "./routes/familyRoutes";
import transactionRoutes from "./routes/transactionRoutes";

dotenv.config();

const PORT = process.env.PORT || 5000;

//Utworzenie połączenia z baza danych
connentDb();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Zaaplikowanie scieżek
app.use("/api/user", userRoutes);
app.use("/api/family", familyRoutes);
app.use("/api/transaction", transactionRoutes);
app.use(errorHandler);

//Utworzenie serwera http i https
const httpServer = http.createServer(app);
//Wystartowanie serwerów
httpServer.listen(PORT, () => {
  console.log(`HTTP Server is running on port ${PORT}`);
});
