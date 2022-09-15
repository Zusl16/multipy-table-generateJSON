const fs = require("fs");
const createFile = async (n = 5) => {
  try {
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
  } catch (error) {
    throw error;
  }
};

//Export module
module.exports = {
  createFile,
};
