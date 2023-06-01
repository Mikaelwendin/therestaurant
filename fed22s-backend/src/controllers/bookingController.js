const Booking = require("../models/Booking");

exports.getAllBookings = async (req, res) => {
  //limit?
  //offset?

  const bookings = await Booking.find();

  //total bookings in database?
  return res.json({
    data: bookings,
  });
};

exports.getBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;

  const booking = await Booking.findById(bookingId);

  // Throw error needs to be added here:
  //if (!booking) throw new Error...

  return res.status(200).json(booking);
};
