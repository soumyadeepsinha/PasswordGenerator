const app = require('commander');
const chalk = require('chalk');
const clipboard = require('clipboardy');
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

// create a variable that will be used as console.log()
const log = console.log


app.version('1.0.0').description('Simple Password Generator');

app
  .option('-l, --length <number>', 'Length of the password', '8')
  .option('-s, --save', 'Password saved to password.txt',)
  .option('-N --no-num', 'Remove number from password',)
  .option('-NS, --no-symbols', 'Remove symbols from password',)
  .parse();

const { length, save, num, symbols } = app.opts();

// Generate password
const securedPassword = createPassword(length, num, symbols)

// copying password to clipboard
clipboard.writeSync(securedPassword)

// save password to a text file
if (save) {
  savePassword(securedPassword)
}

// console.log the passowrd
log(chalk.yellow('Your Secured password : ') + chalk.bold(securedPassword))
log(chalk.red('Password copied to clipboard'))
