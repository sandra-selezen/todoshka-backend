const { Todo } = require('../../models')
const listTodos = async (req, res) => {
  const result = await Todo.find()
  res.json(result)
}

module.exports = listTodos