import express, { Request, Response } from "express";
import { dataSchema, validate } from "../middlewares/zod.middleware";

export const router = express.Router();

router.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Validation with Zod 👊" });
});

router.post("/create", validate(dataSchema), (req: Request, res: Response): Response => {
  return res.json({ ...req.body });
});
