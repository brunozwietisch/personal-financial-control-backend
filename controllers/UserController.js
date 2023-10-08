const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// Models
const User = require("../models/User");

module.exports = class UserController {
  static async store(req, res) {
    const { name, email, password, confirmpassword } = req.body;

    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }

    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório!" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória!" });
      return;
    }

    if (!confirmpassword) {
      res
        .status(422)
        .json({ message: "A confirmação de senha é obrigatória!" });
      return;
    }

    if (password != confirmpassword) {
      res
        .status(422)
        .json({ message: "A senha e a confirmação precisam ser iguais!" });
      return;
    }

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      res.status(422).json({ message: "Por favor, utilize outro e-mail!" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: passwordHash,
    });

    try {
      const newUser = await user.save();

      await createUserToken(newUser, req, res);

      res.status(200).json({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async getUser(req, res) {
    const id = req.params.id
    const user = await User.findById(id)

    if(!user) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json({ user })

  }
};
