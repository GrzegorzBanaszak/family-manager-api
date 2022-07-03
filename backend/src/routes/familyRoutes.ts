import { Router } from "express";
import {
  getFamily,
  verificationFamily,
  getAllFamilies,
} from "../controllers/Family/familyController";
import protect from "../middleware/authMiddleware";
const router = Router();

router.get("/", protect, getFamily);
router.get("/all", protect, getAllFamilies);
router.get("/verification/:verificationKey", verificationFamily);

export default router;
