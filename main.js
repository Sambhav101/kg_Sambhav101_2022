const numbers = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

function getTextOf(val) {
  let res = "";
  const arr = val.split("");
  for (let each of arr) {
    res += numbers[parseInt(each)];
  }
  return res;
}

function getStringOf(values) {
  let res = [];
  for (let val of values) {
    res.push(getTextOf(val));
  }
  return res.join(",");
}

console.log(getStringOf(process.argv.slice(2)));
