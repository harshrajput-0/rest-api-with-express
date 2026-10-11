import express from "express";
import router from "./src/routes.js";

const app = express();

app.use(express.json())

app.use("/api/posts", router);

export default app;

