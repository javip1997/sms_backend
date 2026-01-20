const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const { serviceId, address, bookingDate } = req.body;

  const booking = await Booking.create({
    serviceId,
    userId: req.user.id,
    address,
    bookingDate,
  });

  res.status(201).json(booking);
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ userId: req.user.id })
    .populate("serviceId");
  res.json(bookings);
};
