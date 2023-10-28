const router = require('express').Router();

const CashFlowOutflowController = require("../controllers/CashFlowOutflowController");

// middlewares
const verifyToken = require("../helpers/check-token");

router.post('/store', verifyToken, CashFlowOutflowController.store);

module.exports = router;