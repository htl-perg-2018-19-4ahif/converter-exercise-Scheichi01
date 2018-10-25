const chalk = require('chalk');
const convert = require('convert-units');
process.argv.splice(0, 2);
if(process.argv.length != 4) console.error(chalk.red('Wrong number of parameters!'));
if(isNaN(process.argv[0]) || process.argv[2] != 'to') console.error(chalk.red('Invalid parameters'));
console.log(chalk.blue(convert(process.argv[0]).from(process.argv[1]).to(process.argv[3])));