const { HttpError } = require("../../helpers")
const { Todo } = require("../../models")

const removeTodo = async (req, res) => {
  const { todoId } = req.params
  const result = await Todo.findByIdAndDelete(todoId)
  if (!result) {
    throw HttpError(404, 'Not found')
  }
  res.json({
    message: 'Todo deleted',
  })
}

module.exports = removeTodo