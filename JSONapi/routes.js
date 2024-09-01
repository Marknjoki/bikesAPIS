
const express = require('express')
const router = express.Router()
const toDoListController = require('./../controller/todoList.js')

router.param('id', toDoListController.checkId)
// router.param('id')
router.route('/')
    .get(toDoListController.getAllItems)
    .post(toDoListController.addItem)


router.route('/:id')
    .get(toDoListController.getItemById)
    .patch(toDoListController.updateItem)

module.exports = router