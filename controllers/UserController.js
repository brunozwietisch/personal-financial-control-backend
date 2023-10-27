const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/User");

// Helpers
const getUserByToken = require("../helpers/get-user-by-token");
const createUserToken = require("../helpers/create-user-token");
const getToken = require("../helpers/get-token");

module.exports = class UserController {
  static async getUser(req, res) {
    const id = req.params.id;
    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    res.status(200).json({ user });
  }

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

    const userExists = await User.findOne(
      { where: { email } },
      {
        attributes: { exclude: ["password"] },
      }
    );

    if (userExists) {
      res.status(422).json({ message: "Por favor, utilize outro e-mail!" });
      return;
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
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    const token = getToken(req);
    const user = await getUserByToken(token);
    const { name, email } = req.body;

    if (!name) {
      res.status(422).json({
        message: "O nome é obrigatório!",
      });
      return;
    }

    if (!email) {
      res.status(422).json({
        message: "O e-mail é obrigatório",
      });
      return;
    }

    const userExists = await User.findOne(
      { where: { email } },
      {
        attributes: { exclude: ["password"] },
      }
    );

    if (user.email !== email && userExists) {
      res.status(422).json({
        message: "Por favor, utilize outro e-mail!",
      });
      return;
    }

    try {
      const userData = {
        name,
        email,
      };

      const updateUser = await User.update(
        userData,
        {
          where: { id: user.id },
        },
        {
          attributes: { exclude: ["password"] },
        }
      );

      const data =
        updateUser &&
        (await User.findByPk(user.id, {
          attributes: { exclude: ["password"] },
        }));

      res.json({
        message: "Usuário atualizado com sucesso",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async changePassword(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    const { password, confirmpassword } = req.body;

    if (!password) {
      res.status(422).json({ message: "Senha obrigatória" });

      return;
    }

    if (password != confirmpassword) {
      res.status(422).json({ error: "As senhas não conferem." });
    } else if (password == confirmpassword && password != null) {
      const salt = await bcrypt.genSalt(12);
      const reqPassword = req.body.password;

      const passwordHash = await bcrypt.hash(reqPassword, salt);

      try {
        const userPassword = {
          password: passwordHash,
        };

        await User.update(
          userPassword,
          {
            where: { id: user.id },
          },
          {
            attributes: { exclude: ["password"] },
          }
        );

        res.json({
          message: "Senha atualizada com sucesso!",
        });
      } catch (error) {
        res.status(500).json({ message: error });
      }
    } else {
      res.status(422).json({ error: "Erro ao atualizar" });
    }
  }

  static async inativeUser(req, res) {}
};
