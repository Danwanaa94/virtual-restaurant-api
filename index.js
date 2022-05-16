const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const restaurantRoute = require("./routes/restaurantRoute");
const userRoute = require("./routes/userRoute");
const menuRoute = require("./routes/menuRoute");

connectDB();
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/restaurants", restaurantRoute);
app.use("/api/users", userRoute);
app.use("/api/menus", menuRoute)

//home route
app.get("/", (req, res) => {
  res.send("WELCOME TO OUR VIRTUAL RESTAURANTS APP");
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running!!");
});

