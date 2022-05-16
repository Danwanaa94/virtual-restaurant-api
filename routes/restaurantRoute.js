const { Router } = require("express");
const {createRestaurant, getRestaurants} = require("../controllers/restaurantControllers");

const restaurantsrouter = Router();

restaurantsrouter.route("/").get(getRestaurants);
restaurantsrouter.post("/registerrestaurant", createRestaurant);
// restaurantsrouter.post("/loginrestaurant", loginRestaurant);

module.exports = restaurantsrouter;
