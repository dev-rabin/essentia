const express = require('express');
const contactController = require('../controller/contact_controller');
const ContactRouter = express.Router();

ContactRouter.post("/add-contact", contactController.addContactUs);

module.exports = ContactRouter;