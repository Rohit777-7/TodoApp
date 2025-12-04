require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todos');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect DB
connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/todo-api');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/todos', todoRoutes);

// health
app.get('/', (req, res) => res.send('Todo API Running'));

// Error handler at end
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
