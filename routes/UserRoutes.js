const router = require('express').Router();

const UserController = require('../controllers/UserController');

const User = require('../models/User');

// middlewares
const verifyToken = require("../helpers/check-token");

router.post('/store', UserController.store);
router.patch('/update/:id', verifyToken, UserController.update);
router.patch('/update/password/:id', verifyToken, UserController.changePassword);

router.get('/:id',verifyToken,  UserController.getUser);

module.exports = router;