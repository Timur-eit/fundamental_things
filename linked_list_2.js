// homework

const head = { value: 'Фунтик (head / first) - index 0', next: null, prev: null };
const second = { value: 'Шпунтик (second) - index 1', next: null, prev: head };
const third = { value: 'Шапокляк (third) - index 2', next: null, prev: second };
const fourth = { value: 'Волшебник (last / fourth) - index 3', next: null, prev: third };

head.next = second;
second.next = third;
third.next = fourth;

// console.log(JSON.stringify(head, function replacer(key, value) {
//  return (key === 'prev') ? undefined : value;
// }, 4));

let pointers = { first: head, last: fourth };

// console.log(pointers.first); // head
// console.log(pointers.first.next); // second
// console.log(pointers.first.next.next); // third
// console.log(pointers.first.next.next.next); // fourth
// console.log(pointers.first.next.next.next.next); // null

// console.log(pointers.last); // fourth
// console.log(pointers.last.prev); // third
// console.log(pointers.last.prev.prev); // second
// console.log(pointers.last.prev.prev.prev); // head
// console.log(pointers.last.prev.prev.prev.prev); // null


const firstNewElement = 'Новый элемент в начале';
const lastNewElement = 'Новый элемент в конце';
const someNewElement = 'Новый элемент';

function addFirst(pointers, value) {
  const oldFirstElement = pointers.first;
  pointers.first = { value: value, next: oldFirstElement, prev: null };
  oldFirstElement.prev = pointers.first;

  return pointers.first;
}

// addFirst(pointers, firstNewElement);
// console.log(pointers.first);

function addLast(pointers, value) {
  const oldLastElem = pointers.last;
  pointers.last = { value: value, next: null, prev: oldLastElem };
  oldLastElem.next = pointers.last;

  return pointers.last;
}

// addLast(pointers, lastNewElement);

function addAfter(pointers, value, index) {  
  const newElem = {};
  let i = 0;

  for (let p = pointers.first; p !== null; p = p.next) {
    if (i === index && p.next !== null) {      
      newElem.value = `${value} new index ${index}.1`;
      newElem.next = p.next;
      newElem.prev = p;
      p.next = newElem;
      newElem.next.prev = newElem;
      return p;
    } else if (i === index && p.next === null) {      
      newElem.value = `${value} new index ${index}.1`;
      newElem.next = null;
      newElem.prev = p;
      p.next = newElem;      
      return p;
    }
    i++;
  }
}

// addAfter(pointers, someNewElement, 2);

function getByIndex(pointers, index) {
  let p = pointers.first;
  for (let i = 0; i <= index; i++) {
    p = p.next;    
  }
  return p;
}

function addAfter2(pointers, value, index) {
  const targetElem = getByIndex(pointers, index);
  if (targetElem.next === null) {
    addLast(pointers, value);
  } else {
    // newELem foo => code...
  }
}


function removeFirst(pointers) {
  const secondElem = pointers.first.next;
  secondElem.prev = null;
  pointers.first = secondElem;
  return pointers.first;
}

removeFirst(pointers);
console.log(pointers.first);

function removeLast(pointers) {
  const beforeLastElem = pointers.last.prev;
  beforeLastElem.next = null;
  pointers.last = beforeLastElem;
  return pointers.last;
}

// removeLast(pointers);
// console.log(pointers.last);

function print(pointers) {
  for (let p = pointers.first; p !== null; p = p.next) {
    console.log(p.value);
  }
}

// print(pointers);

function printReverse(pointers) {
  for (let p = pointers.last; p !== null; p = p.prev) {
    console.log(p.value);
  }
}

// printReverse(pointers);
