const Source = require("../../models/Source");
const bcrypt = require("bcrypt");

const data = [
  {
    name: "Ibridge Technology",
  },
  {
    name: "048 Hostel",
  },
];

module.exports = {
  up: async () => {
    try {
      for (const record of data) {
        const records = new Source({
          name: record.name,
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
        await Source.destroy({
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
