const Joi = require('joi')

const addTodoSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  checked: Joi.boolean(),
})

module.exports = addTodoSchema