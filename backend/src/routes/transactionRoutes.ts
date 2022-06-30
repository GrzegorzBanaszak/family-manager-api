import { Router } from "express";
import protect from "../middleware/authMiddleware";
import { addTransaction } from "../controllers/Transaction/transactionController";
const router = Router();

router.post("/", protect, addTransaction);

export default router;
