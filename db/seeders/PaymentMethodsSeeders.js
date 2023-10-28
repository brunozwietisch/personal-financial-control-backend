const PaymentMethod = require("../../models/PaymentMethod");
const bcrypt = require("bcrypt");

const data = [
  {
    name: "Pix",
    icon: "fa-brands fa-pix"
  },
  {
    name: "Cartão de Crédito Nubank",
    icon: "fa-brands fa-cc-visa"
  },
];

module.exports = {
  up: async () => {
    try {
      for (const record of data) {
        const records = new PaymentMethod({
          name: record.name,
          description: record.description,
          color: record.color,
          icon: record.icon,
        });

        await records.save();

        console.log("Registro inserido com sucesso:", records);
      }
    } catch (error) {
      console.error("Erro ao inserir os registros:", error);
    }
  },
  down: async () => {
    try {
      for (const record of data) {
        await PaymentMethod.destroy({
          where: {
            name: record.name,
          },
          force: true,
        });

        console.log("Registro excluído com sucesso:", data.email);
      }
    } catch (error) {
      console.error("Erro ao excluir os registros:", error);
    }
  },
};
