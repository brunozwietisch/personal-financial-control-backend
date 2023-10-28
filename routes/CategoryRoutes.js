const router = require('express').Router();

const CategoryController = require("../controllers/CategoryController");

// middlewares
const verifyToken = require("../helpers/check-token");

router.post('/store', verifyToken, CategoryController.store);

module.exports = router;