const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bookings: {
      type: String,
      default: "0+",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
