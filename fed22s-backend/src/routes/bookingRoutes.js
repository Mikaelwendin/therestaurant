const express = require("express");
const {
  getAllBookings,
  getBookingById,
  createNewBooking,
} = require("../controllers/bookingController");
const router = express.Router();

// GET - /api/v1/bookings
router.get("/", getAllBookings);

// GET - /api/v1/bookings/:bookingId
router.get("/:bookingId", getBookingById);

// POST - /api/v1/bookings
router.post("/", createNewBooking);

module.exports = router;
