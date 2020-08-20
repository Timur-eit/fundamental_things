// hash Map

let myMap = {
  121472: [['Bob', '+13456'], ['Marla', '+443456'], ['Denis', '+753456']], // for collision demonstrate
};

myMap.put = function(key, value) {
  const id = getHash(key);
  const inner = [key, value];

  if (id in myMap) {
    myMap[id].push(inner);
  } else {
    myMap[id] = [inner]; // else ??
  }
};

myMap.get = function(key) {
  const id = getHash(key);
  if (id in myMap) {    
    return myMap[id].reduce((_, current) => current[0] === key ? current[1] : undefined, '');
  }
  return null;
};

function getHash(str) {
  let hash = '';
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return Number(hash) % 1e6;
}


myMap.put('Arsentiy', '+11111');
myMap.put('Evgeny', '+33333');
myMap.put('Bob', '+44444');

// console.log(myMap);

console.log(myMap.get('Arsentiy')); // => +11111
console.log(myMap.get('Evgeny')); // => +33333
console.log(myMap.get('Bob')); // => +44444
console.log(myMap.get('Willy')); // => null