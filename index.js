// const fs = require('fs') // old way
import chalk from 'chalk'; // es6 method, new
import validator from 'validator';

console.log(chalk.red('Hello World!'));
console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);






