const argv = require("yargs")
    .option("n", {
        alias: "n",
        type: "number",
        demandOption: true,
        describe: "Number to multiply",
    })
    .option("l", {
        alias: "list",
        type: "boolean",
        default: false,
        describe: "Show table in console",
    })
    .option("h",{
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "Limit of the table",
    })
    .check((argv, options) => {
        if (isNaN(argv.n)) {
        throw "The base has to be a number";
        }
        return true;
    }).argv;

module.exports = argv;
