const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');

// GET all tasks for a specific project
// POST a new task for a specific project
router.route('/:projectId/tasks')
  .get(protect, getTasks)
  .post(protect, createTask);

// PUT/DELETE a specific task by its ID
router.route('/:projectId/tasks/:taskId')
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;
