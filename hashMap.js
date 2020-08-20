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
    return getValue(myMap[id], key);    
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

function getValue(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === key) {
      return arr[i][1];
    }    
  }
}




myMap.put('Arsentiy', '+11111');
myMap.put('Evgeny', '+33333');

console.log(myMap.get('Arsentiy')); // => +11111
console.log(myMap.get('Evgeny')); // => +33333
console.log(myMap.get('Willy')); // => null