"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config();
(0, db_1.default)();
const options = {
    key: fs_1.default.readFileSync("key.pem"),
    cert: fs_1.default.readFileSync("cert.pem"),
};
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;
const httpServer = http_1.default.createServer(app);
const httpsServer = https_1.default.createServer(options, app);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
httpServer.listen(8080, () => {
    console.log("HTTP Server is running on port 8080");
});
httpsServer.listen(8000, () => {
    console.log(`HTTPS Server is running on port 8000`);
});
