const { Router } = require("express");
const { newUser, getUsers, loginUser } = require("../controllers/userControllers");

const userrouter = Router();

userrouter.post("/signup", newUser).post("/login", loginUser)

userrouter.route("/").get(getUsers)

module.exports = userrouter;
