// Models
const PaymentMethod = require("../models/PaymentMethod");

module.exports = class PaymentMethodController {
  static async store(req, res) {
    const { name } = req.body;

    console.log(name)

    /* if (!name) {
      res.status(422).json({
        message: "O nome é obrigatório",
      });

      return;
    }

    const permission = new Permission({
      name
    });

    try {
      const newPermission = await permission.save();
      res.status(200).json({ message: "Permissão cadastrada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    } */
  }
};
