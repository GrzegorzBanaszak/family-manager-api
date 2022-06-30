import { Router } from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/User/userController";
import protect from "../middleware/authMiddleware";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);

export default router;
