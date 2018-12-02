const { readFile } = require("fs");
const { resolve } = require("path");

const diffFromIDs = ID1 => ID2 => {
  let diff = 0;
  let lastIndex = null;
  const listID1 = ID1.split("");
  const listID2 = ID2.split("");
  listID1.forEach((char, index) => {
    if (char !== listID2[index]) {
      diff += 1;
      lastIndex = index;
    }
  });
  return {
    diff,
    lastIndex
  };
};

readFile(resolve(__dirname, "input.txt"), (err, data) => {
  if (!err) {
    const IDs = data.toString().split("\n");
    IDs.forEach(ID1 => {
      IDs.forEach(ID2 => {
        const { diff, lastIndex } = diffFromIDs(ID1)(ID2);
        if (diff > 0 && diff < 2) {
          console.log(
            ID2.split("")
              .filter((_, index) => index !== lastIndex)
              .join("")
          );
        }
      });
    });
  } else {
    console.log(err);
  }
});
