const overUnderArray = [1, 45, 32, 21, 5, 17, 43, 93];

// for loop to loop over array
for (let i = 0; i < overUnderArray.length; i++) {
  // ternary operator to check if array numbers are over or under
  overUnderArray[i] > 25 ? console.log("over") : console.log("under");
}
