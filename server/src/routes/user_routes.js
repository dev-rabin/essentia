const express = require('express');
const UserController = require('../controller/user_controller');
const UserRouter = express.Router();

UserRouter.post("/add-user", UserController.addUser)



module.exports = UserRouter;