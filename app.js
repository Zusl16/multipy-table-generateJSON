//import createFile function from helpers\multiply.js
const { createFile } = require("./helpers/multiply");
//Limpiar consola
console.clear();
//CONSTANT NUMBER
const n = 4;
//CALL FUNCTION
createFile(n)
  .then((result) => console.log(result, "created successfully"))
  .catch((err) => console.log(err, "error"));

