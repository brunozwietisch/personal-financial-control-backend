const router = require('express').Router();

const CashFlowExitController = require("../controllers/CashFlowExitController");

// middlewares
const verifyToken = require("../helpers/check-token");

router.post('/store', verifyToken, CashFlowExitController.store);

module.exports = router;