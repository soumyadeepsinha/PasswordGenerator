const program = require('commander');
const chalk = require('chalk');
const clipboard = require('clipboardy');
const createPassword = require('./utils/createPassword')
const log = console.log


program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'Length of the password', '8')
  .option('-s, --save', 'Password saved to password.txt',)
  .option('-N --no-num', 'Remove number from password',)
  .option('-NS, --no-symbols', 'Remove symbols from password',)
  .parse();

const { length, save, num, symbols } = program.opts();

// console.log(num, symbols);

// Generate password

const securedPassword = createPassword(length, num, symbols)

clipboard.writeSync(securedPassword)

log(chalk.yellow('Your Secured password : ') + chalk.bold(securedPassword))
log(chalk.red('Password copied to clipboard'))