import { Router } from "express";
import MessageResponse from "@/interfaces/MessageResponse";

const router = Router();

router.get<object, MessageResponse>("/", (_, res) => {
  res.json({ message: "Hello World!" });
});

export default router;
