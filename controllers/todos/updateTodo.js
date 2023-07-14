const { HttpError } = require("../../helpers")
const { Todo } = require("../../models")
const { addTodoSchema } = require("../../schemas")

const updateTodo = async (req, res) => {
  const { error } = addTodoSchema.validate(req.body)
  if (error) {
    throw HttpError(400, 'Missing fields')
  }
  const { todoId } = req.params
  const result = await Todo.findByIdAndUpdate(todoId, req.body, { new: true })
  if (!result) {
    throw HttpError(404, 'Not found')
  }
  res.json(result)
}

module.exports = updateTodo