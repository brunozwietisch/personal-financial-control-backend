const db = require("../db/conn");
const path = require("path");

// Seeders
const UsersSeeders = require("./seeders/UsersSeeders");
const CategoriesSeeders = require("./seeders/CategoriesSeeders");
const SourcesSeeders = require("./seeders/SourcesSeeders");
const PaymentMethodsSeeders = require("./seeders/PaymentMethodsSeeders");

async function runSeeders() {
  try {
    // Execute os seeders
    const seeders = [
      UsersSeeders,
      CategoriesSeeders,
      SourcesSeeders,
      PaymentMethodsSeeders,
    ];

    for (const seeder of seeders) {
      await seeder.down();
      await seeder.up();
    }

    console.log("Seeders executados com sucesso.");
  } catch (error) {
    // console.error("Erro ao executar seeders:", error);
  } finally {
    await db.close();
  }
}

runSeeders();
