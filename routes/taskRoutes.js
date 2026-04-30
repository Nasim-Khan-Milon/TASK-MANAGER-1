const express = require("express");
const { createTask } = require("../models/taskModel");
const router = express.Router();


router.post("/", createTask);

module.exports = router;