const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');


// creating a function that save password

const savePassword = (password) => {
  fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green('PASSWORD saved to password.txt'));
      })
    })
  })
}

module.exports = savePassword;