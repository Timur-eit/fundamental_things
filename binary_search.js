const arr = [1, 2, 7, 10, 15, 23, 25, 31, 34, 37, 45];
          // 0  1  2   3   4   5   6   7   8   9  10

function contains(arr, value, start = 0, end = arr.length - 1) {
  let mid = start + Math.floor((end - start) / 2);
  // console.log([start, end, mid]);
  
  if (start > end) {
    return false;
  }

  if (arr[mid] === value) {
    return true; // или мид или -1
  } else if (arr[mid] < value) {
    // start = mid;
    return contains(arr, value, mid + 1, end);
  } else if (arr[mid] > value) {
    // end = mid;
    return contains(arr, value, start, mid);
  }
}

console.log(contains(arr, 31)); // => true
console.log(contains(arr, 7)); // => true
console.log(contains(arr, 2)); // => true
console.log(contains(arr, 100)); // => false
console.log(contains(arr, 15)); // => true
console.log(contains(arr, 2)); // => true
