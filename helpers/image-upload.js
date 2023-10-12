const multer = require("multer");
const path = require("pathe");

const imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        // if(req.baseUrl.includes("users"))
    }
})