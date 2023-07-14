const { HttpError } = require("../../helpers")
const { Todo } = require("../../models")

const getTodoById = async (req, res) => {
  const { todoId } = req.params
  const result = await Todo.findById(todoId)
  if (!result) {
    throw HttpError(404, 'Not found')
  }
  res.json(result)
}

module.exports = getTodoById