import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";
import { NextFunction, Request, Response } from "express";

const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decode = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        if (decode.exp && Date.now() >= decode.exp * 1000) {
          res.status(401);
          throw new Error("Token is expired");
        }

        req.user = await User.findById(decode.id);
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Unauthorized");
      }
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

interface JwtPayload extends jwt.JwtPayload {
  id: string;
}

export default protect;
