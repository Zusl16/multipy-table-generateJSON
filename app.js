//import createFile function from helpers\multiply.js
const { createFile } = require("./helpers/multiply");
//Limpiar consola
console.clear();

//Get arguments from console and convert to number
//NEVER DO THIS, BAD PRACTICE, USE YARGS
console.log(process.argv);
const [, , arg3 = "n=5"] = process.argv;
const [, n = 5] = arg3.split("=");

//CONSTANT NUMBER
// const n = 4;

// //CALL FUNCTION
createFile(n)
  .then((result) => console.log(result, "created successfully"))
  .catch((err) => console.log(err, "error"));
