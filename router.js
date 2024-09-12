const express = require("express");
const controller = require("./controller");
const routes = express.Router();

routes.post("/testing", controller.testing);
routes.post("/signUp", controller.userSignup);

module.exports = routes;
