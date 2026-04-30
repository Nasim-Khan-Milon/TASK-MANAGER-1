const taskModel = require("../models/taskModel");

// CREATE
const createTask = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = taskModel.createTask(req.body);
    res.status(201).json(task);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports = {
  createTask,
};