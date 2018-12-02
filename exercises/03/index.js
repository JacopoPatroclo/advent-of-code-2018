const { readFile } = require("fs");
const { resolve } = require("path");

const generateIDObject = ID => {
  const state = {};
  ID.split("").forEach(letter => {
    state[letter] = (state[letter] || 0) + 1;
  });
  return {
    state,
    getTwoLetterNumber: () => {
      return Object.keys(state).reduce((result, key) => {
        if (result > 0) {
          return result;
        } else {
          return state[key] === 2 ? 1 : 0;
        }
      }, 0);
    },
    getThreeLetterNumber: () => {
      return Object.keys(state).reduce((result, key) => {
        if (result > 0) {
          return result;
        } else {
          return state[key] === 3 ? 1 : 0;
        }
      }, 0);
    }
  };
};

readFile(resolve(__dirname, "input.txt"), (err, data) => {
  if (!err) {
    const IDs = data.toString().split("\n");
    let countThree = 0;
    let countTwo = 0;
    IDs.forEach(ID => {
      const objID = generateIDObject(ID);
      countThree += objID.getThreeLetterNumber();
      countTwo += objID.getTwoLetterNumber();
    });
    console.log("checksum is:", countThree * countTwo);
  } else {
    console.log(err);
  }
});
