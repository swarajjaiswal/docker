const express = require('express');
const router = express.Router();
const User = require("../models/user");
const {addUser,getUsers} = require("../controllers/userControllers");

router.post('/',addUser);
router.get('/',getUsers)

module.exports = router;