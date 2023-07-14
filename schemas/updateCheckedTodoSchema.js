const Joi = require('joi');

const updateCheckedTodoSchema = Joi.object({
  checked: Joi.boolean().required(),
})

module.exports = updateCheckedTodoSchema