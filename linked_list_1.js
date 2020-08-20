const head = { value: 'Фунтик', next: null };
const second = { value: 'Шпунтик', next: null };
const third = { value: 'Шапокляк', next: null };

head.next = second;
second.next = third;

// console.log(head);
// console.log(head.value);
// console.log(head.next);
// console.log(head.next.value);
// console.log(head.next.next);
// console.log(head.next.next.value);
// console.log(head.next.next.next);

function listContains(list, value) {
    if (list.value === value) {
        return true;
    } else if (list.next !== null) {
        return listContains(list.next, value);
    } else {
        return false;
    }
}

function addToList(list, value) {
    const tempNext = list.next;
    return list.next = { value: value, next: tempNext };    
}

const newList = addToList(second, 'Еще один персонаж');
// console.log(JSON.stringify(newList, null, 2));
// console.log(JSON.stringify(head, null, 4));


function printList(currentElem) {
    if (currentElem !== null) {
        console.log(currentElem.value);
        printList(currentElem.next);
    }
    // if (currentElem === null) {
    //     return;
    // }
    // console.log(currentElem.value);
    // printList(currentElem.next);
}

// printList(head);

function printList2(currentElem) {
    let next = currentElem.next;
    console.log(currentElem.value);
    while (next !== null) {
        console.log(next.value);
        next = next.next;
    }
}

function printList3(currentElem) {
    for (let p = currentElem; p !== null; p = p.next) {
        console.log(p.value);
    }
}

function printListReverse(currentElem) {
    for (let p = currentElem; p !== null; p = p.prev) {
        console.log(p.value);
    }
}

// p = pointer
