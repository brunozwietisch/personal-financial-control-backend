const { db } = require("./conn");
const path = require("path");

async function runSeeders() {
  try {
    // Execute os seeders
    const seeders = [require("./seeders/UsersSeeders")];

    for (const seeder of seeders) {
      await seeder.up();
    }

    console.log("Seeders executados com sucesso.");
  } catch (error) {
    console.error("Erro ao executar seeders:", error);
  } finally {
    await db.close();
  }
}

runSeeders();
