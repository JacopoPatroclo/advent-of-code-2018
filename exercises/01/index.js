const { readFile } = require("fs");
const { resolve } = require("path");

readFile(resolve(__dirname, "input.txt"), (err, data) => {
  console.log(
    err ||
      data
        .toString()
        .split("\n")
        .reduce((balance, val) => balance + parseInt(val), 0)
  );
});
