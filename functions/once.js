// global = let invoked = false → closure
// замыкание - типа 'не очень глобальные' переменные

function once(fn) {
  let invoked = false;
  function inner(...x) { // ! inner - to avoid global let
    if (!invoked) {
      invoked = true;
      return fn(...x);
    } else {
      return undefined;
    }
  }
  return inner
}


function foo(str) {
  console.log(str);
}

let logOnce = once(foo);
logOnce('Hello');
logOnce('Hello, World!');
