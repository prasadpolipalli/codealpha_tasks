const express = require('express');
const app = express();

const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/projects', taskRoutes); // Notice both mounted under /api/projects

module.exports = app;
