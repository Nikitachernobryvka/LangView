import express from "express";
import { getTestInfo, submitTest, getLastResult } from "../controllers/testController.js";

const router = express.Router();

router.get("/info", getTestInfo);
router.get("/lastResult", getLastResult);
router.post("/submit", submitTest);

export default router;