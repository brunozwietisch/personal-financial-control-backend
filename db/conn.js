const mongoose = require('mongoose');
const { APP_ENV } = require('../helpers/constants');

async function main() {
    // Conecta-se ao banco de dados MongoDB
    await mongoose.connect('mongodb://localhost:27017/financialcontrol', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    if(APP_ENV === 'test'){
        const collections = mongoose.connection.collections;
        for (const key in collections) {
            await collections[key].deleteMany({});
        }
    }

    console.log('Conectou com o Mongoose');
}

main().catch((err) => console.log(err));

module.exports = mongoose;
