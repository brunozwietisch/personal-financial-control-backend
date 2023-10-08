const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost:27017/financialcontrol')
    console.log('Conectou com o Mongoose')
}

main().catch((err) => console.log(err))

module.exports = mongoose