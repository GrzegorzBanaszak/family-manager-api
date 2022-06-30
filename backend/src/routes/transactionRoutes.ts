import { Router } from "express";
import protect from "../middleware/authMiddleware";
import {
  addTransaction,
  addAmount,
} from "../controllers/Transaction/transactionController";
const router = Router();

router.post("/", protect, addTransaction);
router.post("/add", protect, addAmount);

export default router;
