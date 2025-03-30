function hasTargetSum(array, target) {
  // Write your algorithm here

  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here


  O(n) - where n is the length of the array.
  This is because we are using a single loop to iterate through the array,
  and the operations inside the loop (checking if a number is in the set and adding a number to the set)
  are both O(1) on average.
*/

/* 
  Add your pseudocode here
  - Create a new Set called seenNumbers
  - Loop through each number in the array
    - Calculate the complement by subtracting the number from the target
    - If seenNumbers contains the complement, return true
    - Otherwise, add the number to seenNumbers
  - If the loop completes without finding a pair, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
