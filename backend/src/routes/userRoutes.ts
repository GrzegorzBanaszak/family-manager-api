import { Router } from "express";
import {
  getUser,
  loginUser,
  registerUser,
  logout,
} from "../controllers/User/userController";
import protect from "../middleware/authMiddleware";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);
router.get("/logout", protect, logout);

export default router;
