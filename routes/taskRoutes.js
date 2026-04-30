const express = require("express");
const { createTask, getAllTasks, getTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTask);


module.exports = router;