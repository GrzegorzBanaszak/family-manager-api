import { CookieOptions } from "express";

export const cookisConfig: CookieOptions = {
  maxAge: 1000 * 60 * 60 * 24 * 7,
  // secure: true,
  // httpOnly: true,
  sameSite: "lax",
};
