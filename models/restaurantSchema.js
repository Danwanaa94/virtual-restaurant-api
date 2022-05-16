const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurantname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  booking: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },

  contact: {
    phone: String,
    fax: String,
    email: String,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
