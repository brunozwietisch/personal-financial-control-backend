const bcrypt = require("bcrypt");
const dotenv = require('dotenv');

// Models
const User = require("../models/User");

// Helpers
const getToken = require('../helpers/get-token');
const createUserToken = require('../helpers/create-user-token');
const { TOKEN_SECRET } = require('../helpers/constants');

module.exports = class AuthController {
    static async login(req, res) {
      const { email, password } = req.body;

      if (!email) {
        res.status(422).json({ message: "O e-mail é obrigatório!" });
        return;
      }

      if (!password) {
        res.status(422).json({ message: "A senha é obrigatória!" });
        return;
      }

      const user = await User.findOne({
        where: { email: email },
      });

      if (!user) {
        return res
          .status(422)
          .json({
            message: "Não há usuário com este e-mail!",
          });
      }

      const checkPassword = await bcrypt.compare(password, user.password);

      if(!checkPassword) {
        return res.status(422).json({ message: 'Senha invalida' });
      }

      await createUserToken(user, req, res);
    }

    static async checkValidation(req, res) {
        let currentUser;

        if(req.headers.authorization) {
            const token = getToken(req);
            const decoded = jwt.verify(token, TOKEN_SECRET);

            currentUser = await User.findByPk(id, {
              attributes: { exclude: ["password"] },
            });

            currentUser.password = undefined;
        } else {
            currentUser = null;
        }

        res.status(200).send(currentUser);
    }
}