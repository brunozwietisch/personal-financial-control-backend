const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { TOKEN_SECRET } = require('../helpers/constants');

const getUserByToken = async (token) => {
    if (!token) return res.status(401).json({ error: "Acesso negado!" });
    
    const decoded = jwt.verify(token, `${TOKEN_SECRET}`);
    const userId = decoded.id;
    const user = await User.findByPk(userId);
    return user;
}

module.exports = getUserByToken;