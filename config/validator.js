const yup = require("yup");

function validate(data) {
  const userSchema = yup.object().shape({
    username: yup.string().required("userName must be filled").min(3).max(20),
    email: yup.string().email().required("emailis required").min(3).max(50),
    password: yup.string().required("password required").min(8).max(20),
  });
  return userSchema.validate(data);
}

function validateRestaurant(data) {
  const restaurantSchema = yup.object().shape({
    restaurantname: yup.string().required(" must be filled").min(3).max(20),
    location: yup.string().required("location is required").min(2).max(50),
    booking: yup.string().required("booking required").min(2).max(20),
    rating: yup.string().required("rating required").min(2).max(20),
    contact: yup.string().required("contact required").min(2).max(20),
  });
  //comment
  return restaurantSchema.validate(data);
}

module.exports = { validate, validateRestaurant };
