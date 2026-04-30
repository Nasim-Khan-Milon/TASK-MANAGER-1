const taskModel = require("../models/taskModel");

const createTask = (req, res) => {
  try {
    console.log("POST /tasks hit");
    console.log("req.body =", req.body);

    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = taskModel.createTask(req.body);

    return res.status(201).json({
      message: "Task created successfully",
      task
    });
  } catch (error) {
    console.error("createTask error:", error);
    return res.status(500).json({
      message: error.message
    });
  }
};

const getAllTasks = (req, res) => {
  try {
    const tasks = taskModel.getAllTasks();
    res.json(tasks);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getTask = (req, res) => {
  try {
    const task = taskModel.getTaskById(parseInt(req.params.id));

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const searchTasks = (req, res) => {
  try {
    const query = req.query.q?.toLowerCase() || "";
    const result = taskModel.searchTasks(query);
    res.json(result);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const filterTasks = (req, res) => {
  const result = taskModel.filterByStatus(req.params.status);
  res.json(result);
};

const updateTask = (req, res) => {
  const updated = taskModel.updateTask(parseInt(req.params.id), req.body);

  if (!updated) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({   
     message: "Task updated successfully", 
     task: updated 
    });
};

const deleteTask = (req, res) => {
  const success = taskModel.deleteTask(parseInt(req.params.id));

  if (!success) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted successfully" });
};


module.exports = {
  createTask,
  getAllTasks,
  getTask,
  searchTasks,
  filterTasks,
  updateTask,
  deleteTask
};
