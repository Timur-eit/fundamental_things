function add(n) {
  let sum = n;
  inner.valueOf = () => sum;

  function inner(x) {
    sum += x;
    return inner;
  }
  return inner;
}

console.log(add(2)(3) == 5); // => true