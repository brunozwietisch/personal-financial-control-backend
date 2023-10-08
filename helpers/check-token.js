const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const checkToke = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Acesso negado!" });

  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    req.user = verified;

    next();
  } catch (err) {
    res.status(400).json({ message: "O Token é inválido!" });
  }
};

module.exports = checkToke;
