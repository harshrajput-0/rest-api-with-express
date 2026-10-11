import { Router } from "express";
import { createPost, updatePost, deletePost, getPost, getAllPosts } from "./controllers.js";


const router = Router();

router.get("/", getAllPosts);

router.get("/:id", getPost);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;