import { Router } from "express";
import { getFamily } from "../controllers/Family/familyController";
import protect from "../middleware/authMiddleware";
const router = Router();
router.get("/", protect, getFamily);

export default router;
