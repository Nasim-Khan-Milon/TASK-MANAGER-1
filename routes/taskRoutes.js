const express = require("express");
const { createTask, getAllTasks, getTask, searchTasks, filterTasks } = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTask);
router.get("/search", searchTasks);
router.get("/filter/:status", filterTasks);


module.exports = router;