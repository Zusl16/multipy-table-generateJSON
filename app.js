//import filesystem api from node
const fs = require("fs");

console.clear();

//CONSTANT NUMBER
const n = 4;

//Multiply
let result = "";
for (let i = 1; i <= 10; i++) {
  result += `${n} * ${i} = ${n * i}\n`;
}

//write file
fs.writeFile(`table${n}.txt`, result, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File created successfully");
});

