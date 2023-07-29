const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('../helpers')

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  token: String,
}, { versionKey: false, timestamps: true })

userSchema.post('save', handleMongooseError)

const User = model('user', userSchema)

module.exports = User