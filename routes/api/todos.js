const express = require('express')
const { todos: ctrl } = require('../../controllers')
const { ctrlWrapper } = require('../../helpers')
const { isValidId } = require('../../middlewares')

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.listTodos))

router.get('/:todoId', isValidId, ctrlWrapper(ctrl.getTodoById))

router.post('/', ctrlWrapper(ctrl.addTodo))

router.put('/:todoId', isValidId, ctrlWrapper(ctrl.updateTodo))

router.patch('/:todoId', isValidId, ctrlWrapper(ctrl.updateStatusTodo))

router.delete('/:todoId', isValidId, ctrlWrapper(ctrl.removeTodo))

module.exports = router