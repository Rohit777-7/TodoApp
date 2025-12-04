const mongoose = require('mongoose');
const Todo = require('../models/Todo');

// Create todo
exports.createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ message: 'Title is required' });

    const todo = await Todo.create({
      user: req.user._id,
      title,
      description
    });
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};

// List todos with pagination
exports.listTodos = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 10, 100);
    const skip = (page - 1) * limit;

    const filter = { user: req.user._id };

    const [total, todos] = await Promise.all([
      Todo.countDocuments(filter),
      Todo.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit)
    ]);

    res.json({
      page, limit, totalPages: Math.ceil(total / limit), total, todos
    });
  } catch (err) {
    next(err);
  }
};

// Update status
exports.updateTodoStatus = async (req, res, next) => {
  try {
    const id = (req.params.id || '').toString().trim();
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid todo id' });
    }

    const { status } = req.body;
    if (!['pending', 'completed'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { status },
      { new: true }
    );
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

// Delete todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const id = (req.params.id || '').toString().trim();
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid todo id' });
    }

    const todo = await Todo.findOneAndDelete({ _id: id, user: req.user._id });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    next(err);
  }
};
