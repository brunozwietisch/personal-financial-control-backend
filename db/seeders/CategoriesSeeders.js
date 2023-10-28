const Category = require("../../models/Category");
const bcrypt = require("bcrypt");

const data = [
  {
    name: "Salario Mensal CLT",
    type: "entry",
    color: "#8AF075",
    icon: "fas fa-money-bill-wave-alt",
  },
  {
    name: "Alguel",
    type: "exit",
    color: "#E05B4F",
    icon: "fas fa-home",
  },
];

module.exports = {
  up: async () => {
    try {
      for (const record of data) {
        const records = new Category({
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
        await Category.destroy({
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
