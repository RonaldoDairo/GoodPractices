// bad
const item = new Object();

//good


//bad 
const test = 'test';

const obj = {
    test: test
}

//good


//bad copy
const person = {
    name: 'person',
    age: 20,
    lastName: 'lastname'
}

let newObj = {};

for(key in person){
    newObj[key] = person[key];
}

//good



// bad 
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

//good


// bad
const items = new Array();

// good


//bad 
const list = [];

list[0] = 'add new element to list';

//good


//bad copy
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

//good



//destructurin obj
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
  
    return `${firstName} ${lastName}`;
}

//good


//destructurin array
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

//good