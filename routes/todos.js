const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createTodo,
  listTodos,
  updateTodoStatus,
  deleteTodo
} = require('../controllers/todoController');

router.use(auth); // protect all /todos routes

router.post('/', createTodo);
router.get('/', listTodos);
router.patch('/:id', updateTodoStatus);
router.delete('/:id', deleteTodo);

module.exports = router;
