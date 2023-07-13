const { Todo } = require('../../models')
const { HttpError } = require('../../helpers')
const { addTodoSchema } = require('../../schemas')

const addTodo = async (req, res) => {
  const { error } = addTodoSchema.validate(req.body)
  if (error) {
    throw HttpError(400, 'Missing fields')
  }

  const result = await Todo.create(req.body)
  res.status(201).json(result)
}

module.exports = addTodo