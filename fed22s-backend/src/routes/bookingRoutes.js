const express = require("express");
const {
  getAllBookings,
  getBookingById,
} = require("../controllers/bookingController");
const router = express.Router();

// GET - /api/v1/bookings
router.get("/", getAllBookings);

// GET - /api/v1/bookings/:bookingId
router.get("/:bookingId", getBookingById);

module.exports = router;
