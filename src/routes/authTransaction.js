import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post("/transactions", transactionController.create);

transactionRouter.get("/transactions", transactionController.findAllById);

export default transactionRouter;
