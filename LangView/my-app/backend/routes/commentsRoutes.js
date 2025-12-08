import express from "express";
import { getComments, addComment,  addReply, editComment, deleteComment} from "../controllers/commentsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:page", getComments);

router.post("/add", addComment);

router.post("/reply", addReply);

router.put("/edit/:id", authMiddleware, editComment);

router.delete("/delete/:id", authMiddleware, deleteComment);

// router.put("/like/:id/:type", likeComment);

export default router;