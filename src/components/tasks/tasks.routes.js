import { Router } from "express";
import { createTask } from "./tasks.controllers.js";
import { updateTaskStatus } from "./tasks.controllers.js";

const router = Router();

router.post("/tasks", createTask);
router.put("/tasks", updateTaskStatus);
router.route("/tasks")
.post(createTask)
.put(updateTaskStatus);


export default router;
