const fs = require("fs");
const createFile = async (n = 5) => {
  console.log("        Tabla del: ", n);
  console.log("==================================");

  let result = "";
  //Multiply
  for (let i = 1; i <= 10; i++) {
    result += `${n} * ${i} = ${n * i}\n`;
  }
  //Show result in console
  console.log(result);
  //write file
  fs.writeFileSync(`table${n}.txt`, result);

  return `table${n}.txt`;
};

//Export module
module.exports = {
  createFile,
};
