const namesArray = [
  "bob",
  "jimmy",
  "max b",
  "bernie",
  "jordan",
  "future hendrix",
];

function evenOdd(arr) {
  //Initializing Arrays for even/odd names
  const even = [];
  const odd = [];

  //Even/odd Splitting Loop
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  //Changing Even Letters
  // Sets Name at x index to equal 'b' and adding even again but at index 1 - it's length then add 'c' to the end
  for (let x = 0; x < even.length; x++) even[x] = "b" + even[x].slice(1);

  for (let y = 0; y < odd.length; y++)
    odd[y] = odd[y].slice(0, odd[y].length - 1) + "c";

  //Printing Even and Odd Arrays
  console.log(even);
  console.log(odd);

  //Returning Even array
  return even;
}

// return the even array to varaiable evenArray
const evenArray = evenOdd(namesArray);

console.log(evenArray);
