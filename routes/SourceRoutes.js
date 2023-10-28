const router = require('express').Router();

const SourceController = require("../controllers/SourceController");

// middlewares
const verifyToken = require("../helpers/check-token");

router.post('/store', verifyToken, SourceController.store);

module.exports = router;