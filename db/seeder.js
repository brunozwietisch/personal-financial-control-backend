const db = require("../db/conn");
const path = require("path");

// Seeders
const UsersSeeders = require("./seeders/UsersSeeders")

async function runSeeders() {
  try {
    // Execute os seeders
    const seeders = [
      UsersSeeders,
    ];

    for (const seeder of seeders) {
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
