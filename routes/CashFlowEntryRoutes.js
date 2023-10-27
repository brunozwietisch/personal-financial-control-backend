const router = require('express').Router();

const CashFlowEntryController = require("../controllers/CashFlowEntryController");

// middlewares
const verifyToken = require("../helpers/check-token");

router.post('/store', verifyToken, CashFlowEntryController.store);

module.exports = router;