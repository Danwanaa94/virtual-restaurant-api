const Restaurant = require("../models/restaurantSchema");
const { validateRestaurant } = require("../config/validator");


const createRestaurant = async (req, res) => {
  const valid = await validateRestaurant(req.body);

  if (valid) {
    const newRestaurant = new Restaurant({
      restaurantname: req.body.restaurantname,
      location: req.body.location,
      booking: req.body.booking,
      contact: req.body.contact,
      rating: req.body.rating,
    });
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json({
      message: "restaurant created",
      savedRestaurant,
    });
  } else {
    res.status(400).json({
      message: "Invalid data",
    });
  }
};

//restaurant login
// async function loginRestaurant(req, res) {
//   try {
//     const { restaurantname, location } = req.body;

//     const restaurant = await Restaurant.findOne({restaurantname});

//     if (!restaurant) {
//       return res.status(404).json({
//         error: true,
//         message: " no account matches",
//       });
//     }

//     const isValid = await restaurantname( restaurantname,restaurant.restaurantname);

//     if (!isValid) {
//       return res.status(400).json({
//         error: true,
//         message: " wrong restaurantname",
//       });
//     }

//     return res.status(200).send({
//       success: true,
//       message: "Restaurant logged in",
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       error: true,
//       message: "Couldn't login. Please try again.",
//     });
//   }
// }

//getting a restaurant
const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find();

  res.status(200).json(restaurants);
};

module.exports = { createRestaurant, getRestaurants };
