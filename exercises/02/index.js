const { readFile } = require("fs");
const { resolve } = require("path");

const dictionary = {
  0: 1
};
let currentFrequency = 0;
let found = null;

const repeater = list => {
  list.forEach(value => {
    currentFrequency = currentFrequency + parseInt(value);
    dictionary[currentFrequency] = dictionary[currentFrequency]
      ? dictionary[currentFrequency] + 1
      : 1;
    if (dictionary[currentFrequency] >= 2 && found === null) {
      found = currentFrequency;
    }
  });
};

readFile(resolve(__dirname, "input.txt"), (err, data) => {
  if (!err) {
    const fShiftList = data.toString().split("\n");
    while (found === null) {
      repeater(fShiftList);
    }
    console.log(found);
  } else {
    console.log(err);
  }
});
