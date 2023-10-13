const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

const mocha = new Mocha();

fs.readdirSync(__dirname).forEach((file) => {
  if (file.endsWith('.test.js')) {
    mocha.addFile(path.join(__dirname, file));
  }
});

mocha.run((failures) => {
  process.exit(failures);
});
