const program = require('commander');
const chalk = require('chalk');
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

const generatedPassword = createPassword(length, num, symbols)

log(chalk.yellow('Your Secured password : ') + chalk.bold(generatedPassword));