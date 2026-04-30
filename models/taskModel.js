let tasks = [];
let currentId = 1;

const VALID_STATUS = ["Pending", "Ongoing", "Complete"];

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find(t => t.id === id);

const createTask = (data) => {
  if (!VALID_STATUS.includes(data.status || "Pending")) {
    throw new Error("Invalid status value");
  }

  const newTask = {
    id: currentId++,
    title: data.title,
    description: data.description || "",
    status: data.status || "Pending"
  };

  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, data) => {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  if (data.status && !VALID_STATUS.includes(data.status)) {
    throw new Error("Invalid status value");
  }

  if (data.title !== undefined) task.title = data.title;
  if (data.description !== undefined) task.description = data.description;
  if (data.status !== undefined) task.status = data.status;

  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};

const filterByStatus = (status) => {
  if (!VALID_STATUS.includes(status)) {
    throw new Error("Invalid status value");
  }

  return tasks.filter(t => t.status === status);
};

const searchTasks = (query) => {
  return tasks.filter(t =>
    t.title.toLowerCase().includes(query) ||
    t.description.toLowerCase().includes(query)
  );
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  filterByStatus,
  searchTasks,
  VALID_STATUS
};