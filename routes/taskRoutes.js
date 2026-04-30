const express = require("express");
const { createTask, getAllTasks, getTask, searchTasks, filterTasks, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTask);
router.get("/search", searchTasks);
router.get("/filter/:status", filterTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);


module.exports = router;