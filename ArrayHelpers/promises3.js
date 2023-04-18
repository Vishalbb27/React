//this is a promise chain example which is used to call the function getData() and then findData() and then print the result
//is is use to solve the callback hell problem
//callback hell problem occurs when we have to call the function inside the function
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "John", age: 25 },
        { name: "Ben", age: 30 },
        { name: "Holly", age: 28 },
      ]);
      reject("Error");
    }, 1000);
  });
}

function findData(name) {
  return new Promise((resolve, reject) => {
    getData()
      .then((users) => {
        const user = users.find((user) => user.name === name);
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

findData("John")
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

function onFulfilled(data) {
  console.log(data);
}

const promise = getData();
promise.then(onFulfilled);