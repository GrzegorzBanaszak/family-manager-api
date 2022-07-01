import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";
import { NextFunction, Request, Response } from "express";

const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (token) {
      try {
        const decode = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        req.user = await User.findById(decode.id).select("-hash");
        next();
      } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
          res.status(401);
          throw new Error("Token wygasł");
        }
        res.status(401);
        throw new Error("Brak uprawnień");
      }
    }
    if (!token) {
      res.status(401);
      throw new Error("Brak tokenu");
    }
  }
);

interface JwtPayload extends jwt.JwtPayload {
  id: string;
}

export default protect;
