const router = require('express').Router();

const RecurrenceController = require("../controllers/RecurrenceController");

// middlewares
const verifyToken = require("../helpers/check-token");

router.post('/store', verifyToken, RecurrenceController.store);

module.exports = router;