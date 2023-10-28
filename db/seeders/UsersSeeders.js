const { User } = require("../../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  up: async () => {
    const salt1 = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash("12345678", salt1);

    await User.bulkCreate(
      [
        {
          name: "Bruno Fernando Zwietisch",
          email: "brunozwietisch@gmail.com",
          password: passwordHash,
        },
      ],
      { returning: true, individualHooks: true }
    );
  },
  down: async () => {
    await User.destroy({
      where: {
        email: ["brunozwietisch@gmail.com"],
      },
    });
  },
};
