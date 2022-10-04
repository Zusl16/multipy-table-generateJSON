const fs = require("fs");
const colors = require("colors");
const createFile = async (n = 5, listar = false, hasta = 10) => {
  try {
    //condition if listar is true
    if (listar) {
      console.log("        Tabla del: ".green, n);
      console.log("\n==================================\n".bgYellow);
    }

    let result = "";
    //Multiply

    for (let i = 1; i <= hasta; i++) {
      result += `${n} * ${i} = ${n * i}\n`;
    }
    //Show result in console
    //condition if argv is true or false
    if (listar) {
      console.log(result);
    }

    //write file
    fs.writeFileSync(`./salida/table${n}.txt`, result);

    return `table${n}.txt`;
  } catch (error) {
    throw error;
  }
};

//Export module
module.exports = {
  createFile,
};
