import { Router } from "express";
import { registerUser } from "../controllers/User/userController";
const router = Router();

router.post("/register", registerUser);

export default router;
