const { Router } = require("express");

const {
  createMenu,
  getMenu,
  deleteMenu,
} = require("../controllers/menuControllers");

const menurouter = Router();

menurouter.post("/addmenu", createMenu);
menurouter.route("/").get(getMenu);
menurouter.delete("/:id", deleteMenu);

module.exports = menurouter;
