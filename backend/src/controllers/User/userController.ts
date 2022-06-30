import asyncHandelr from "express-async-handler";
import User from "../../models/userModel";
import Family from "../../models/familyModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { RegisterUserDto } from "./dto/RegisterUserDto";
import { GetUserDto } from "./dto/GetUserDto";
import { RoleEnum } from "../../Enums/RoleEnum";

// @desc   - Rejstracja uzytkownika
// @route  - Post /api/user/register
// @access - Public
const registerUser = asyncHandelr(async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    password,
    hasFamily,
    role,
    familyId,
  }: RegisterUserDto = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Nie wszystkie pola zostaly wypelnione");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("Uzytkownik o podanym emailu juz istnieje");
  }

  if (role === RoleEnum.admin) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      hash,
      role: RoleEnum.admin,
    });

    if (!user) {
      res.status(400);
      throw new Error("Nie udalo sie utworzyc uzytkownika");
    }

    const userDto: GetUserDto = {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    res.status(201).json(userDto);
  }

  if (!hasFamily) {
    const family = await Family.create({ name: lastName.toLowerCase() });

    if (!family) {
      res.status(400);
      throw new Error("Nie udalo sie utworzyc rodziny");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      hash,
      memberOfFamily: family._id,
      role: RoleEnum.user,
    });

    if (!user) {
      res.status(400);
      throw new Error("Nie udalo sie utworzyc uzytkownika");
    }

    const result = await family.updateOne({
      $push: { familyMembers: [user._id] },
    });

    if (result.modifiedCount === 0) {
      res.status(400);
      throw new Error("Nie udalo sie dodac uzytkownika do rodziny");
    }
    const userDto: GetUserDto = {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      familyId: family._id.toString(),
    };

    res.status(201).json(userDto);
  }

  if (hasFamily) {
    const family = await Family.findById(familyId);

    if (!family) {
      res.status(400);
      throw new Error("Nie znaleziono rodziny");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      hash,
      memberOfFamily: family._id,
      role: RoleEnum.user,
    });

    if (!user) {
      res.status(400);
      throw new Error("Nie udalo sie utworzyc uzytkownika");
    }

    const result = await family.updateOne({
      $push: { familyMembers: [user._id] },
    });

    if (result.modifiedCount === 0) {
      res.status(400);
      throw new Error("Nie udalo sie dodac uzytkownika do rodziny");
    }
    const userDto: GetUserDto = {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      familyId: family._id.toString(),
    };

    res.status(201).json(userDto);
  }
});

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
};

export { registerUser };
