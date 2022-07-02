import asyncHandeler from "express-async-handler";
import User from "../../models/userModel";
import Family from "../../models/familyModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { RegisterUserDto, UserDto, LoginUserDto } from "./dto";
import { RoleEnum } from "../../enums";
import { v4 as uuidv4 } from "uuid";

// @desc   - Rejestracja administratora
// @route  - Post /api/user/admin/register
// @access - Public
const registerAdmin = asyncHandeler(async (req: Request, res: Response) => {
  const { firstName, lastName, email, password }: RegisterUserDto = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Nie wszystkie pola zostaly wypelnione");
  }

  //Walidacja emaila
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
    res.status(400);
    throw new Error("Niepoprawny adres email");
  }

  //Sprawdzenie czy uzytkownik istnieje
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("Uzytkownik o podanym emailu juz istnieje");
  }

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

  const userDto: UserDto = {
    id: user._id.toString(),
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
  };

  //Wysłanie danych użytkownia i ustawienie tokena
  res.cookie("token", generateToken(user._id.toString()), {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
  });
  res.status(201).json(userDto);
});

// @desc   - Rejestracja uzytkownika
// @route  - Post /api/user/register
// @access - Public
const registerUser = asyncHandeler(async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    password,
    hasFamily,
    memberOfFamily,
  }: RegisterUserDto = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Nie wszystkie pola zostaly wypelnione");
  }

  //Walidacja emaila
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
    res.status(400);
    throw new Error("Niepoprawny adres email");
  }

  //Sprawdzenie czy uzytkownik istnieje
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("Uzytkownik o podanym emailu juz istnieje");
  }

  //Utworzenie użytkowniaka w zależności czy ma rodzica
  if (!hasFamily) {
    const family = await Family.create({
      name: lastName.toLowerCase(),
      verificationKey: uuidv4(),
    });

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

    const userDto: UserDto = {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      memberOfFamily: user.memberOfFamily.toString(),
    };

    res.cookie("token", generateToken(user._id.toString()), {
      secure: true,
      httpOnly: true,
      sameSite: "lax",
    });
    res.status(201).json(userDto);
  }

  if (hasFamily) {
    const family = await Family.findById(memberOfFamily);

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

    const userDto: UserDto = {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      memberOfFamily: user.memberOfFamily.toString(),
    };

    res.cookie("token", generateToken(user._id.toString()), {
      secure: true,
      httpOnly: true,
      sameSite: "lax",
    });
    res.status(201).json(userDto);
  }
});

// @desc   - Logowanie uzytkownika
// @route  - Post /api/user/login
// @access - Public
const loginUser = asyncHandeler(async (req: Request, res: Response) => {
  const { email, password }: LoginUserDto = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Nie wszystkie pola zostaly wypelnione");
  }

  const user = await User.findOne({ email: email.toLowerCase() });

  //Jeżeli użytkownik istnieje i hasło jest poprawne to zwracamy dane i token
  if (user && (await bcrypt.compare(password, user.hash))) {
    if (user.role === RoleEnum.admin) {
      const userDto: UserDto = {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: RoleEnum.admin,
      };

      res.cookie("token", generateToken(user._id.toString()));
      res.status(200).json(userDto);
    }

    if (user.role === RoleEnum.user) {
      const userDto: UserDto = {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: RoleEnum.user,
        memberOfFamily: user.memberOfFamily?.toString(),
      };

      res.cookie("token", generateToken(user._id.toString()), {
        secure: true,
        httpOnly: true,
        sameSite: "lax",
      });
      res.status(201).json(userDto);
    }
  } else {
    res.status(400);
    throw new Error("Nieprawidłowy email lub hasło");
  }
});

const logout = asyncHandeler(async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Wylogowano" });
});

const getUser = asyncHandeler(async (req: Request, res: Response) => {
  if (req.user.role === RoleEnum.user) {
    const userDto: UserDto = {
      id: req.user._id.toString(),
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      role: RoleEnum.user,
      memberOfFamily: req.user.memberOfFamily,
    };
    res.status(200).json(userDto);
  }

  if (req.user.role === RoleEnum.admin) {
    const userDto: UserDto = {
      id: req.user._id.toString(),
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      role: RoleEnum.admin,
    };
    res.status(200).json(userDto);
  }
});

//Generowanie tokena
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
};

export { registerAdmin, registerUser, loginUser, getUser, logout };
