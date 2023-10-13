
const dotenv = require('dotenv');

dotenv.config();

module.exports.TOKEN_SECRET = process.env.TOKEN_SECRET;
module.exports.APP_ENV = process.env.APP_ENV;