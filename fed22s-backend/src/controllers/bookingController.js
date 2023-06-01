const Booking = require("../models/Booking");

exports.getAllBookings = async (req, res) => {
  //limit?
  //offset?

  const bookings = await Booking.find();

  //show total bookings in database?
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

exports.createNewBooking = async (req, res) => {
  // use custom error in this fn:?
  try {
    const newBooking = await Booking.create(req.body);

    return res
      .setHeader(
        "Location",
        `http://localhost:${process.env.PORT}/api/v1/bookings/${newBooking._id}`
      )
      .status(201)
      .json(newBooking);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateBookingById = async (req, res) => {
  return;
};

/*
const doc = await Model.findById(id)
doc.name = 'jason bourne';
await doc.save();
*/

exports.deleteBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;

  //if (!bookingToDelete) error finns ej

  await Booking.findByIdAndDelete(bookingId);

  return res.sendStatus(204);
};
