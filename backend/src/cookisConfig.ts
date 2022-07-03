import { CookieOptions } from "express";

export const cookisConfig: CookieOptions = {
  //   secure: true,
  //   httpOnly: true,
  sameSite: "lax",
};
