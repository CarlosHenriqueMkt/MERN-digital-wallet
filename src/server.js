import express, { json } from "express";
import authRouter from "./routes/authRouter.js";
import { connectDB } from "./config/database.js";
import transactionRouter from "./routes/authTransaction.js";

const app = express();
connectDB();
app.use(json());
app.use(authRouter);
app.use(transactionRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening port ${PORT}`));
