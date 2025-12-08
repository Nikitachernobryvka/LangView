import express from "express";
import { getQuestionById } from "../controllers/questionController.js";

const router = express.Router();

// router.get("/:testId?", getQuestions);
router.get("/:id", getQuestionById);

export default router;