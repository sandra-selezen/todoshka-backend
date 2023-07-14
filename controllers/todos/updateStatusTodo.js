const { HttpError } = require("../../helpers")
const { Todo } = require("../../models")
const { updateCheckedTodoSchema } = require("../../schemas")

const updateStatusTodo = async (req, res) => {
  const { error } = updateCheckedTodoSchema.validate(req.body)
  if (error) {
    throw HttpError(400, 'Missing field checked')
  }
  const { todoId } = req.params
  const result = await Todo.findByIdAndUpdate(todoId, req.body, { new: true })
  if (!result) {
    throw HttpError(404, 'Not found')
  }
  res.json(result)
}

module.exports = updateStatusTodo