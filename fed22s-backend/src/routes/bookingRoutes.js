const express = require("express");
const { getAllBookings } = require("../controllers/bookingController");
const router = express.Router();

// GET - /api/v1/bookings
router.get("/", getAllBookings);

module.exports = router;
