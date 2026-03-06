import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handleChat } from "./chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", handleChat);

app.listen(3000, () => {
  console.log("AI server running on port 3000");
});
