const jwt = require("jsonwebtoken")
const User = require("../models/User")
const dotenv = require('dotenv')

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const getUserByToken = async (token) => {
    if(!token) return res.status(401).json({ error: "Acesso negado!" })

    const decoded = jwt.verify(token, `${TOKEN_SECRET}`)

    const userId = decoded.id

    const user = await User.findOne({ _id: userId })

    return user
}