debugger;

const unsortArr = [9, 1, 8, 2, 7, 3, 6, 4, 5];
//                 0  1  2  3  4  5  6  7  8

function qsort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let startIndex = 0;
  let endIndex = arr.length - 1;

  let basisElemIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
  let less = [];
  let moreOrEqual = [];

  const basis = arr[basisElemIndex];
  // console.log('basis ' + basis);

  for (let i = startIndex; i <= endIndex; i++) {
    if (arr[i] < basis) {
      less.push(arr[i]);
    } else {
      moreOrEqual.push(arr[i]);
    }
  }

  const result = less.concat(moreOrEqual);
  // console.log([less, moreOrEqual]);

  if (less.length < 2 || moreOrEqual.length < 2) {
    return result;
  }
  return qsort(less).concat(qsort(moreOrEqual));
}

console.log(qsort(unsortArr)); // returns [1, 2, 3, 4, 5, 6, 7, 9, 8]
console.log(qsort([2, 1])); // returns [ 1, 2 ]
console.log(qsort([2, 1, 3])); // returns [ 2, 1, 3 ]