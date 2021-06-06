const array = [
  "Retta",
  "Vern",
  "Marica",
  "Cyrus",
  "Linette",
  "Curt",
  "Nichole",
  "Jesica",
  "Wynell",
  "Michaele",
];

const answer = function () {
  let nameLength = 0;
  let longestName;

  // for loop to check the legnth of each string to see which string has the longest value
  // stores the longest value in the variable longest value
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > nameLength) {
      nameLength = array[i].length;
      longestName = array[i];
    }
  }

  // returning longest name to answer variable
  return longestName;
};

// printing answer to the console from the function expression
console.log(answer());
