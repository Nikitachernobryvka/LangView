import express from "express";

import authRoutes from "./routes/authRoutes.js";
import commentsRoutes from "./routes/commentsRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";

import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/test", testRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Listening");
})
