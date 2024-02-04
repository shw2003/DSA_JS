// SORT THE ARRAY
// Time Complexity: O(NlogN), For sorting the array
// Space Complexity: O(1)

function largestVariable(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return -1;
  }

  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}

const arr1 = [2, 3, 5, 1, 0, 4];
const arr2 = [2];

console.log(" Second Largest Variable : ", largestVariable(arr2));

// 2.
// Time Complexity: O(N), Single-pass solution
// Space Complexity: O(1)
function secondSmallest(arr) {
  if (arr.length < 2) return -1;

  let small = Infinity;
  let second_small = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      second_small = small;
      small = arr[i];
    } else if (arr[i] < second_small && arr[i] !== small) {
      second_small = arr[i];
    }
  }

  return second_small;
}

function secondLargest(arr) {
  if (arr.length < 2) return -1;

  let large = -Infinity;
  let second_large = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      second_large = large;
      large = arr[i];
    } else if (arr[i] > second_large && arr[i] !== large) {
      second_large = arr[i];
    }
  }

  return second_large;
}

const arr = [1, 2, 4, 7, 7, 5];
const sS = secondSmallest(arr);
const sL = secondLargest(arr);

console.log("Second smallest is " + sS);
console.log("Second largest is " + sL);
