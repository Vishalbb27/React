//Spread Operator
var arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

arr = [...arr, ...arr2];

console.log(arr);

const users = [
  { id: 1, name: "Ben" },
  { id: 2, name: "Hollly" },
];

const newUser = { id: 3, name: "Pepa" };

users.push(newUser);

const updateUsers = [...users, newUser];
console.log(users);
console.log(updateUsers);

// what is happening here
let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", x: 13 };
//what is happening here  is that the second object is overriding the first object

let mergeObj = { ...obj1, ...obj2 };
let cloneObj = { ...obj1 };
console.log(obj1, obj2);
console.log(mergeObj);

const person = {
  name: "John",
  age: 25,
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

let { name: n, age: a } = person;
console.log(n, a);

const manager = {
  id: 1,
  name: "John",
  reportees: [
    { id: 2, name: "Ben" },
    { id: 3, name: "Holly" },
    { id: 4, name: "Pepa" },
  ],
};

const {
  name: managerName,
  reportees: [{ name: reportee1 }, { name: reportee2 }],
} = manager;
console.log(managerName, reportee1, reportee2);

function userid({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  console.log(`${displayName} is ${name}`);
}

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

id = userid(user); //destructor object as parameter
console.log(id);
whois(user);
