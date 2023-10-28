const router = require('express').Router();

const PaymentMethodController = require("../controllers/PaymentMethodController");

// middlewares
const verifyToken = require("../helpers/check-token");

router.post('/store', verifyToken, PaymentMethodController.store);

module.exports = router;