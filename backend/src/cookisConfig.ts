import { CookieOptions } from "express";

export const cookisConfig: CookieOptions = {
  maxAge: 24 * 60 * 60 * 1000,
  secure: true,
  httpOnly: true,
  sameSite: "lax",
};
