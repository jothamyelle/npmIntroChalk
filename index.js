var chalk = require("chalk");

var message = "Hello " + chalk.blue.bgYellow("World");
message += chalk.blue("\nThis") + chalk.green.underline("is") +  chalk.bold.underline.red("pretty") + chalk.yellow("cool!")
console.log(message);