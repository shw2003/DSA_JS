//  1. SORT THE ARRAY
function largestVariable(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

const arr1 = [2, 3, 5, 1, 0, 3];

console.log("Largest Variable : ", largestVariable(arr1));

// 2. USING MAX VARIABLE

function largestVar(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const arr2 = [2, 3, 5, 1, 0, 3];

let max = largestVar(arr2);

console.log("Largest Var : ", largestVar(arr2));
