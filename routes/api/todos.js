const express = require('express')
const { todos: ctrl } = require('../../controllers')
const { ctrlWrapper } = require('../../helpers')

const router = express.Router()

// router.get('/')

router.post('/', ctrlWrapper(ctrl.addTodo))

module.exports = router