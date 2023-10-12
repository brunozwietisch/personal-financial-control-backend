const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const createUserToken = async (user, req, res) => {
    const token = jwt.sign(
        {
            name: user.name,
            id: user._id
        },
        `${TOKEN_SECRET}`
    );

    return res.status(200).json({
        message: "Você foi autenticado",
        token,
        userId: user._id
    });
};

module.exports = createUserToken;