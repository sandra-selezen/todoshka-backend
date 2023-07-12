const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('../helpers')

const todoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Set title for todo'],
  },
  description: {
    type: String,
    required: [true, 'Set description for todo'],
  },
  checked: {
    type: Boolean,
    default: false,
  },
}, { versionKey: false, timestamps: true })

todoSchema.post('save', handleMongooseError)

const Todo = model('todo', todoSchema)

module.exports = Todo