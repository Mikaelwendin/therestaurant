const Booking = require("../models/Booking");
const { NotFoundError, customApiError } = require("../utils/errors");

exports.getAllBookings = async (req, res, next) => {//Asynkron funktion!
  try {
    const limit = Number(req.query.limit) || 10; //vilken limit har vi här?
    const offset = Number(req.query.offset) || 0;
    const query = Booking.find().limit(limit).skip(offset);
  
  //limit?
  //offset?

  const bookings = await query.exec.find();
  const totalBookingsInDb = await Booking.countDocuments();

  return res.json({
    data: bookings,
    meta: {
      total: totalBookingsInDb,
      count: bookings.length,
      limit: limit,
      offset: offset,
    },
  });
} catch(error) {
  next(error);
  }
};
exports.errorMiddleware = this.errorMiddleware;


exports.getBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;

  const booking = await Booking.findById(bookingId);

  if (!booking)
    throw new NotFoundError("A booking with that ID does not exist");

  return res.status(200).json(booking);
};


exports.createNewBooking = async (req, res) => { //Här är ett catch-block
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

  const apiError = new CustomError("Sadly there was an custom error happening here, please try create a new booking again!");
  customApiError.statusCode = 500;  

/*     return res.status(500).json({
      message: error.message,  KAN MAN VÄL TA BORT? FRÅGA MAX*/
      return next(apiError);
    
  }
};



exports.updateBookingById = async (req, res) => {
  try{  
    const bookingId = req.params.bookingId;
    const filter = { _id: bookingId };
     const update = {
    date: req.body.date,
    time: req.body.time,
    numberOfGuests: req.body.numberOfGuests,
    customer: req.body.customer,
  };

  const booking = await Booking.findOneAndUpdate(filter, update, { new: true, });
  

  if (!booking) {//if booking?? Och kasta ut en ny notfounderror om id:t inte hittas
    throw new NotFoundError("The booking you've searched for doesn't exist!");
  }
  

  return res.json(booking);

} catch(error) {
  next(error);  //skapa en next för att skicka vidare? 
}
};


exports.deleteBookingById = async (req, res, next) => {
  try {
        const bookingId = req.params.bookingId;
        const bookingToDelete = await Booking.findByIdAndDelete(bookingId);
        if (!bookingToDelete){
          throw new NotFoundError ("Sorry, a booking with that ID doesn't exist!");
        }

        return res.sendStatus(204);
  }     catch (error) {
    next(error);
  }
};
