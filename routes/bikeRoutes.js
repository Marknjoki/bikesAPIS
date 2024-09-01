const express = require('express')
const bikeController = require('./../controllers/bikeController')
const router = express.Router()

// router.param('id', bikeController.checkID)
router.route('/')
    .get(bikeController.getAllBikes)
    .post(bikeController.addNewBike)

router.route('/:id')
    .get(bikeController.getBikeById)
// .patch(bikeController.updateExisitingBike)
// .delete(bikeController.deleteBike)


module.exports = router
