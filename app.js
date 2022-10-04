//import createFile function from helpers\multiply.js
const { createFile } = require("./helpers/multiply");
//import argv from config\yargs.js
const argv = require("./config/yargs");
const colors = require("colors");

//Limpiar consola
console.clear();

createFile(argv.n, argv.l, argv.h)
  .then((result) => console.log(result.inverse, "created successfully".bgGreen))
  .catch((err) => console.log(err, "error"));
