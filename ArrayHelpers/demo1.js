var salary = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
salary.forEach((value, index) => {
  console.log(`salary[${index}] = ${value}`);
});

var inc = 0;
salary.forEach((value, index) => {
  inc += value;
});
salary.forEach((num) => console.log(num));

//map() method

const num = [1, 2, 3, 4, 5];
const double = num.map((x) => x * 2);

console.log(double);

console.log(inc);

//find() method
const users = [
  { name: "John", age: 25 },
  { name: "Peter", age: 30 },
  { name: "John", age: 35 },
  { name: "John", age: 40 },
];
if (users.find((user) => user.name == "John")) {
  console.log("John is present");
}

let object = [
  { flag: 1 },
  { flag: 2 },
  { flag: 5 },
  { flag: 4 },
  { flag: 5 },
  { flag: 6 },
  { flag: 7 },
  { flag: 8 },
  { flag: 9 },
  { flag: 10 },
];
object.filter((obj) => {
  if (obj.flag == "5") {
    console.log(obj.flag);
  }
});

//reduce() method

const computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

console.log(computers.every((computers) => computers.ram > 16));
console.log(computers.some((computers) => computers.ram > 16));

//reduce() method

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce((prev, trip) => {
  console.log(prev, trip);
  return prev + trip.distance;
}, 0);

console.log(totalDistance);


//global scope

var x="Declared outside the function";

function myFunction(){
    console.log(x);
}

myFunction();

x="Declared outside the function";  
 x="Declared outside the function";
console.log(x);