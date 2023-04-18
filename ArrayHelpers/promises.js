//It is a callback hell problem and we have to solve it using promises and async await  and also using async await we have to solve the problem of callback hell
function getData(callback) {
  setTimeout(() => {
    callback = [
      { name: "John", age: 25 },
      { name: "Ben", age: 30 },
      { name: "Holly", age: 28 },
    ];
  }, 1000);
}

//promises
function findData(name, callback) {
  getData((users) => {
    const user = users.find((user) => user.name === name);
  });

  callback(user);
}

findData("John", console.log);
