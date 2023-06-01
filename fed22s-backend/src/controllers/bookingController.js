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
