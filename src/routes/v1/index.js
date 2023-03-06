const express = require('express');

const { BookingController } = require('../../controllers/index');

const router = express.Router();

// Booking Routes
router.post('/bookings', BookingController.create);

module.exports = router;