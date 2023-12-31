const User = require("../../models/User");
const bcrypt = require("bcrypt");

const data = [
  {
    name: "Bruno Fernando Zwietisch",
    email: "brunozwietisch@gmail.com",
  },
];

module.exports = {
  up: async () => {
    try {
      for (const record of data) {
        const salt = await bcrypt.genSalt(12);
        const password = await bcrypt.hash("12345678", salt);

        const _user = new User({
          name: record.name,
          email: record.email,
          password,
        });

        await _user.save();

        console.log("Registro inserido com sucesso:", _user);
      }
    } catch (error) {
      console.error("Erro ao inserir os registros:", error);
    }
  },
  down: async () => {
    try {
      for (const record of data) {
        await User.destroy({
          where: {
            email: record.email,
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
