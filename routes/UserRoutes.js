const router = require('express').Router()

const UserController = require('../controllers/UserController')

const User = require('../models/User')

// middlewares
const verifyToken = require("../helpers/check-token");

// Store
router.post('/store', UserController.store)

// getUser
router.get('/:id',verifyToken,  UserController.getUser);

module.exports = router