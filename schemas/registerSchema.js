const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string.require(),
  email: Joi.string.require(),
  password: Joi.string.require(),
})

module.exports = registerSchema